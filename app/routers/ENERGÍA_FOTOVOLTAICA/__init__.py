from fastapi import APIRouter
router = APIRouter()
from .Agr010anexoiiiDeclaraciónResponsableDelValorDel import router as Agr010anexoiiiDeclaraciónResponsableDelValorDel_router
router.include_router(Agr010anexoiiiDeclaraciónResponsableDelValorDel_router, prefix='/Agr010anexoiiiDeclaraciónResponsableDelValorDel', tags=['root - ENERGÍA_FOTOVOLTAICA'])
from .Individual import router as Individual_router
router.include_router(Individual_router, prefix='/Individual', tags=['root - ENERGÍA_FOTOVOLTAICA'])
from .Comun import router as Comun_router
router.include_router(Comun_router, prefix='/Comun', tags=['root - ENERGÍA_FOTOVOLTAICA'])
from .Colectivo import router as Colectivo_router
router.include_router(Colectivo_router, prefix='/Colectivo', tags=['root - ENERGÍA_FOTOVOLTAICA'])
