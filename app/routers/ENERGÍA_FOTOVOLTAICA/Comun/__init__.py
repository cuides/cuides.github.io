from fastapi import APIRouter
router = APIRouter()
from .Acaf000AnálisisFinanciero import router as Acaf000AnálisisFinanciero_router
router.include_router(Acaf000AnálisisFinanciero_router, prefix='/Acaf000AnálisisFinanciero', tags=['root - ENERGÍA_FOTOVOLTAICA - Comun'])
from .Acpvpc00PreciosPvpc import router as Acpvpc00PreciosPvpc_router
router.include_router(Acpvpc00PreciosPvpc_router, prefix='/Acpvpc00PreciosPvpc', tags=['root - ENERGÍA_FOTOVOLTAICA - Comun'])
