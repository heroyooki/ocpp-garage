"""password_field_for_operator

Revision ID: 0003
Revises: 0002
Create Date: 2023-09-18 14:03:33.296436

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0003'
down_revision = '0002'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('operators', sa.Column('password', sa.String(length=124), nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('operators', 'password')
    # ### end Alembic commands ###