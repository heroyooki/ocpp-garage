from copy import deepcopy
from uuid import uuid4

from ocpp.v16.call import RemoteStartTransactionPayload
from ocpp.v16.enums import ChargePointStatus
from pyocpp_contrib.v16.views.tasks import RemoteStartTransactionCallTask

from services.charge_points import get_charge_point


async def process_remote_start_transaction(
        session,
        charge_point_id: str,
        connector_id: int,
        id_tag: str
):
    status = ChargePointStatus.preparing
    charge_point = await get_charge_point(session, charge_point_id)
    
    connectors = deepcopy(charge_point.connectors)
    connectors[str(connector_id)]["status"] = status
    charge_point.connectors.update(connectors)

    payload = RemoteStartTransactionPayload(
        connector_id=connector_id,
        id_tag=id_tag
    )
    return RemoteStartTransactionCallTask(
        message_id=str(uuid4()),
        charge_point_id=charge_point_id,
        payload=payload
    )
