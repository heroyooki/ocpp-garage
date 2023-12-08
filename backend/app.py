from http import HTTPStatus

import aiocron
import arrow
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from loguru import logger
from starlette.requests import Request

from core.database import get_contextual_session
from core.settings import ALLOWED_ORIGIN
from views.drivers import UpdateDriverView

app = FastAPI()

origins = [ALLOWED_ORIGIN]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@aiocron.crontab("0 0 7 * *")
async def send_friendly_reminder():
    from services.notifications import send_reminder_to_debtors

    await send_reminder_to_debtors()


@aiocron.crontab("0 0 15 * *")
async def send_friendly_reminder():
    from services.notifications import send_reminder_to_debtors
    from services.drivers import update_driver

    view = UpdateDriverView(is_active=False)
    await send_reminder_to_debtors(update_driver, view)


@app.middleware("authentication")
async def refresh_auth_token(request: Request, call_next):
    from services.auth import cookie_name, refresh_token

    response: Response = await call_next(request)
    if HTTPStatus(response.status_code) is HTTPStatus.UNAUTHORIZED:
        response.delete_cookie(cookie_name)
    else:
        # Don't refresh cookies for periodic requests from the frontend
        if request.query_params.get("periodic"):
            pass
        else:
            await refresh_token(request, response)
    return response
