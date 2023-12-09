"""essential_tables

Revision ID: 0001
Revises: 
Create Date: 2023-12-08 15:02:20.412273

"""
import csv
import os

import sqlalchemy as sa
from alembic import op

from core.database import generate_default_id
from core.settings import BASE_DIR

# revision identifiers, used by Alembic.
revision = '0001'
down_revision = None
branch_labels = None
depends_on = None

data = []
with open(os.path.join(BASE_DIR, "grid_providers.csv")) as csv_file:
    reader = csv.reader(csv_file)
    next(reader, None)
    for row in reader:
        data.append(dict(
            id=generate_default_id(),
            postnummer=row[0],
            region=row[1],
            name=row[2],
            daily_rate=row[3],
            nightly_rate=row[4],
            is_active=True
        ))


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    grid_providers = op.create_table('grid_providers',
                                     sa.Column('postnummer', sa.String(), nullable=False),
                                     sa.Column('region', sa.String(), nullable=False),
                                     sa.Column('name', sa.String(), nullable=False),
                                     sa.Column('daily_rate', sa.Numeric(precision=2, scale=2), nullable=True),
                                     sa.Column('nightly_rate', sa.Numeric(precision=2, scale=2), nullable=True),
                                     sa.Column('id', sa.String(length=20), nullable=False),
                                     sa.Column('created_at', sa.DateTime(), nullable=True),
                                     sa.Column('updated_at', sa.DateTime(), nullable=True),
                                     sa.Column('is_active', sa.Boolean(), nullable=True),
                                     sa.PrimaryKeyConstraint('id')
                                     )
    op.create_index(op.f('ix_grid_providers_id'), 'grid_providers', ['id'], unique=True)
    op.create_index(op.f('ix_grid_providers_name'), 'grid_providers', ['name'], unique=False)
    op.create_index(op.f('ix_grid_providers_postnummer'), 'grid_providers', ['postnummer'], unique=True)
    op.create_table('transactions',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('garage', sa.String(), nullable=False),
                    sa.Column('driver', sa.String(), nullable=False),
                    sa.Column('meter_start', sa.Integer(), nullable=False),
                    sa.Column('meter_stop', sa.Integer(), nullable=True),
                    sa.Column('charge_point', sa.String(), nullable=False),
                    sa.Column('connector', sa.Integer(), nullable=False),
                    sa.Column('status',
                              sa.Enum('in_progress', 'pending', 'completed', 'faulted', name='transactionstatus'),
                              nullable=True),
                    sa.Column('created_at', sa.DateTime(), nullable=True),
                    sa.Column('updated_at', sa.DateTime(), nullable=True),
                    sa.Column('is_active', sa.Boolean(), nullable=True),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table('garages',
                    sa.Column('name', sa.String(), nullable=False),
                    sa.Column('city', sa.String(), nullable=False),
                    sa.Column('street', sa.String(), nullable=False),
                    sa.Column('contact', sa.String(), nullable=False),
                    sa.Column('phone', sa.String(), nullable=False),
                    sa.Column('email', sa.String(), nullable=False),
                    sa.Column('daily_rate', sa.Numeric(precision=2, scale=2), nullable=True),
                    sa.Column('nightly_rate', sa.Numeric(precision=2, scale=2), nullable=True),
                    sa.Column('grid_provider_id', sa.String(), nullable=False),
                    sa.Column('id', sa.String(length=20), nullable=False),
                    sa.Column('created_at', sa.DateTime(), nullable=True),
                    sa.Column('updated_at', sa.DateTime(), nullable=True),
                    sa.Column('is_active', sa.Boolean(), nullable=True),
                    sa.ForeignKeyConstraint(['grid_provider_id'], ['grid_providers.id'], ),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('name')
                    )
    op.create_index(op.f('ix_garages_id'), 'garages', ['id'], unique=True)
    op.create_table('charge_points',
                    sa.Column('description', sa.String(length=124), nullable=True),
                    sa.Column('status', sa.Enum('available', 'preparing', 'charging', 'suspended_evse', 'suspended_ev',
                                                'finishing', 'reserved', 'unavailable', 'faulted',
                                                name='chargepointstatus'), nullable=True),
                    sa.Column('vendor', sa.String(), nullable=True),
                    sa.Column('serial_number', sa.String(), nullable=True),
                    sa.Column('location', sa.String(), nullable=True),
                    sa.Column('model', sa.String(), nullable=True),
                    sa.Column('garage_id', sa.String(), nullable=False),
                    sa.Column('id', sa.String(length=20), nullable=False),
                    sa.Column('created_at', sa.DateTime(), nullable=True),
                    sa.Column('updated_at', sa.DateTime(), nullable=True),
                    sa.Column('is_active', sa.Boolean(), nullable=True),
                    sa.ForeignKeyConstraint(['garage_id'], ['garages.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_index(op.f('ix_charge_points_id'), 'charge_points', ['id'], unique=True)
    op.create_index(op.f('ix_charge_points_status'), 'charge_points', ['status'], unique=False)
    op.create_table('users',
                    sa.Column('password', sa.String(length=124), nullable=True),
                    sa.Column('email', sa.String(length=48), nullable=False),
                    sa.Column('first_name', sa.String(length=24), nullable=False),
                    sa.Column('last_name', sa.String(length=24), nullable=True),
                    sa.Column('address', sa.String(length=48), nullable=True),
                    sa.Column('role', sa.Enum('admin', 'operator', name='role'), nullable=True),
                    sa.Column('is_superuser', sa.Boolean(), nullable=True),
                    sa.Column('garage_id', sa.String(), nullable=True),
                    sa.Column('id', sa.String(length=20), nullable=False),
                    sa.Column('created_at', sa.DateTime(), nullable=True),
                    sa.Column('updated_at', sa.DateTime(), nullable=True),
                    sa.Column('is_active', sa.Boolean(), nullable=True),
                    sa.ForeignKeyConstraint(['garage_id'], ['garages.id'], ),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('email')
                    )
    op.create_index(op.f('ix_users_id'), 'users', ['id'], unique=True)
    op.create_table('connectors',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('status', sa.Enum('available', 'preparing', 'charging', 'suspended_evse', 'suspended_ev',
                                                'finishing', 'reserved', 'unavailable', 'faulted',
                                                name='chargepointstatus'), nullable=True),
                    sa.Column('error_code',
                              sa.Enum('connector_lock_failure', 'ev_communication_error', 'ground_failure',
                                      'high_temperature', 'internal_error', 'local_list_conflict', 'no_error',
                                      'other_error', 'over_current_failure', 'over_voltage', 'power_meter_failure',
                                      'power_switch_failure', 'reader_failure', 'reset_failure', 'under_voltage',
                                      'weak_signal', name='chargepointerrorcode'), nullable=True),
                    sa.Column('charge_point_id', sa.String(), nullable=False),
                    sa.ForeignKeyConstraint(['charge_point_id'], ['charge_points.id'], ondelete='CASCADE'),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('id', 'charge_point_id')
                    )

    op.bulk_insert(grid_providers, data)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('connectors')
    op.drop_index(op.f('ix_users_id'), table_name='users')
    op.drop_table('users')
    op.drop_index(op.f('ix_charge_points_status'), table_name='charge_points')
    op.drop_index(op.f('ix_charge_points_id'), table_name='charge_points')
    op.drop_table('charge_points')
    op.drop_index(op.f('ix_garages_id'), table_name='garages')
    op.drop_table('garages')
    op.drop_table('transactions')
    op.drop_index(op.f('ix_grid_providers_postnummer'), table_name='grid_providers')
    op.drop_index(op.f('ix_grid_providers_name'), table_name='grid_providers')
    op.drop_index(op.f('ix_grid_providers_id'), table_name='grid_providers')
    op.drop_table('grid_providers')
    # ### end Alembic commands ###
