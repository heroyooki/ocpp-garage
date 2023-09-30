from __future__ import annotations

from sqlalchemy import update, select, or_, func, String
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql import selectable

import models
from views.transactions import CreateTransactionView, UpdateTransactionView


async def create_transaction(
        session: AsyncSession,
        data: CreateTransactionView
) -> models.Transaction:
    transaction = models.Transaction(**data.dict())
    session.add(transaction)
    return transaction


async def update_transaction(
        session: AsyncSession,
        transaction_id: int,
        data: UpdateTransactionView
) -> None:
    await session.execute(
        update(models.Transaction) \
            .where(models.Transaction.transaction_id == transaction_id) \
            .values(**data.dict())
    )


async def build_transactions_query(search: str) -> selectable:
    query = select(models.Transaction)
    query = query.order_by(models.Transaction.transaction_id.desc())
    if search:
        query = query.where(or_(
            func.lower(models.Transaction.driver).contains(func.lower(search)),
            func.cast(models.Transaction.charge_point, String).ilike(f"{search}%"),
        ))
    return query
