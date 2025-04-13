from fastapi import APIRouter
router = APIRouter()
from .assets import router as assets_router
router.include_router(assets_router, prefix='/assets', tags=['root - AAA - AAA'])
from .CodigoNombreSeparadoPorMayusculasSinEspacios import router as CodigoNombreSeparadoPorMayusculasSinEspacios_router
router.include_router(CodigoNombreSeparadoPorMayusculasSinEspacios_router, prefix='/CodigoNombreSeparadoPorMayusculasSinEspacios', tags=['root - AAA - AAA'])
