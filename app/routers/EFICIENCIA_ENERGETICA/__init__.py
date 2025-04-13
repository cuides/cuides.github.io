from fastapi import APIRouter
router = APIRouter()
from .Residencial import router as Residencial_router
router.include_router(Residencial_router, prefix='/Residencial', tags=['root - EFICIENCIA_ENERGETICA'])
from .Transporte import router as Transporte_router
router.include_router(Transporte_router, prefix='/Transporte', tags=['root - EFICIENCIA_ENERGETICA'])
