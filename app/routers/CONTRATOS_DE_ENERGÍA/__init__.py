from fastapi import APIRouter
router = APIRouter()
from .Mercado_regulado import router as Mercado_regulado_router
router.include_router(Mercado_regulado_router, prefix='/Mercado_regulado', tags=['root - CONTRATOS_DE_ENERGÍA'])
from .Mercado_libre import router as Mercado_libre_router
router.include_router(Mercado_libre_router, prefix='/Mercado_libre', tags=['root - CONTRATOS_DE_ENERGÍA'])
