import http

from fastapi import Response, Request

from core.database import get_contextual_session
from manager.exceptions import NotAuthenticated
from manager.routers import AnonymousRouter, AuthenticatedRouter
from manager.services.operators import pwd_context, get_operator, create_token, cookie_name
from manager.views.operators import LoginView, ReadOperatorView


operators_public_router = AnonymousRouter()
operators_private_router = AuthenticatedRouter()


@operators_private_router.get(
    "/me",
    status_code=http.HTTPStatus.OK,
    response_model=ReadOperatorView
)
async def retrieve_operator(request: Request):
    return request.state.operator


@operators_public_router.post(
    "/login",
    status_code=http.HTTPStatus.ACCEPTED,
    response_model=ReadOperatorView
)
async def login(response: Response, data: LoginView):
    async with get_contextual_session() as session:
        operator = await get_operator(session, data.email)
        if not operator:
            raise NotAuthenticated

        if not pwd_context.verify(data.password, operator.password):
            raise NotAuthenticated

    token = await create_token(operator.id)
    response.set_cookie(cookie_name, token)
    return operator


@operators_private_router.post("/logout")
async def login():
    raise NotAuthenticated



