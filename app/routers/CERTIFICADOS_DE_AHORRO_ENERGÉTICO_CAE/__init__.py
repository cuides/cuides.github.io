from fastapi import APIRouter
router = APIRouter()
from .Pobreza_Energética import router as Pobreza_Energética_router
router.include_router(Pobreza_Energética_router, prefix='/Pobreza_Energética', tags=['root - CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE'])
from .Residencial import router as Residencial_router
router.include_router(Residencial_router, prefix='/Residencial', tags=['root - CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE'])
from .Transporte import router as Transporte_router
router.include_router(Transporte_router, prefix='/Transporte', tags=['root - CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE'])
from .Terciario import router as Terciario_router
router.include_router(Terciario_router, prefix='/Terciario', tags=['root - CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE'])
from .Industrial import router as Industrial_router
router.include_router(Industrial_router, prefix='/Industrial', tags=['root - CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE'])
from .Catálogo_Vigente import router as Catálogo_Vigente_router
router.include_router(Catálogo_Vigente_router, prefix='/Catálogo_Vigente', tags=['root - CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE'])
from .Agrario import router as Agrario_router
router.include_router(Agrario_router, prefix='/Agrario', tags=['root - CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE'])
