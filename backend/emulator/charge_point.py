import asyncio

from ocpp.routing import on, after
from ocpp.v16 import call, call_result, ChargePoint as cp
from ocpp.v16.call import ChangeConfigurationPayload
from ocpp.v16.call_result import (
    BootNotificationPayload,
    StatusNotificationPayload,
    HeartbeatPayload
)
from ocpp.v16.enums import (
    Action,
    ConfigurationStatus,
    ChargePointErrorCode,
    ChargePointStatus,
    ResetType,
    ResetStatus,
    UnlockStatus
)

from core import settings
from core.database import get_contextual_session
from core.fields import TransactionStatus
from services.actions import get_all_actions
from services.charge_points import get_charge_point_or_404, get_connector_or_404
from services.ocpp.change_configuration import configuration
from views.actions import ActionView


class ChargePoint(cp):
    @on(Action.ChangeConfiguration, skip_schema_validation=True)
    async def change_configuration(self, key, value):
        conf = ChangeConfigurationPayload(key=key, value=value)
        assert conf in configuration, "Got invalid configuration from the server."
        return call_result.ChangeConfigurationPayload(status=ConfigurationStatus.accepted)

    @on(Action.UnlockConnector)
    async def unlock_connector(self, connector_id):
        assert connector_id == 1
        async with get_contextual_session() as session:
            charge_point = await get_charge_point_or_404(session, self.id)
            actions = await get_all_actions(charge_point.garage.id)
            last_action = ActionView(**actions[0])
            assert TransactionStatus(last_action.status) is TransactionStatus.pending
            assert last_action.charge_point_id == self.id
            assert "Unlock" in last_action.body
            return call_result.UnlockConnectorPayload(status=UnlockStatus.unlocked)

    @after(Action.UnlockConnector)
    async def after_unlock_connector(self, connector_id):
        await asyncio.sleep(1)
        async with get_contextual_session() as session:
            charge_point = await get_charge_point_or_404(session, self.id)
            actions = await get_all_actions(charge_point.garage.id)
            last_action = ActionView(**actions[0])
            assert TransactionStatus(last_action.status) is TransactionStatus.completed
            assert last_action.charge_point_id == self.id
            assert "Unlock" in last_action.body

    @on(Action.Reset)
    async def reset(self, type):
        assert ResetType(type) is ResetType.soft
        async with get_contextual_session() as session:
            charge_point = await get_charge_point_or_404(session, self.id)
            actions = await get_all_actions(charge_point.garage.id)
            last_action = ActionView(**actions[0])
            assert TransactionStatus(last_action.status) is TransactionStatus.pending
            assert last_action.charge_point_id == self.id
            assert last_action.body == "Reset station"
            return call_result.ResetPayload(status=ResetStatus.accepted)

    @after(Action.Reset)
    async def after_reset(self, type):
        await asyncio.sleep(1)
        async with get_contextual_session() as session:
            charge_point = await get_charge_point_or_404(session, self.id)
            actions = await get_all_actions(charge_point.garage.id)
            last_action = ActionView(**actions[0])
            assert TransactionStatus(last_action.status) is TransactionStatus.completed
            assert last_action.charge_point_id == self.id
            assert last_action.body == "Reset station"

    async def send_boot_notification(self):
        request = call.BootNotificationPayload(
            charge_point_model="test",
            charge_point_vendor="ABB"
        )

        response: BootNotificationPayload = await self.call(request)
        assert response.interval == settings.HEARTBEAT_INTERVAL, "Got invalid heartbeat interval."
        async with get_contextual_session() as session:
            charge_point = await get_charge_point_or_404(session, self.id)
            assert charge_point.model == request.charge_point_model
            assert charge_point.vendor == request.charge_point_vendor

    async def send_status_notification(self):
        for connector_id in [0, 1]:
            status = ChargePointStatus.available
            request = call.StatusNotificationPayload(
                connector_id=connector_id,
                error_code=ChargePointErrorCode.no_error,
                status=status
            )
            response = await self.call(request)
            await asyncio.sleep(3)
            assert isinstance(response, StatusNotificationPayload)
            async with get_contextual_session() as session:
                charge_point = await get_charge_point_or_404(session, self.id)
                if connector_id == 0:
                    assert ChargePointStatus(charge_point.status) is status, "Invalid status"
                if connector_id > 0:
                    connector = await get_connector_or_404(session, self.id, connector_id)
                    assert ChargePointStatus(connector.status) is status, "Invalid status"

    async def send_heartbeat(self):
        request = call.HeartbeatPayload()
        response = await self.call(request)
        assert isinstance(response, HeartbeatPayload)
