from fastapi import APIRouter
router = APIRouter()
from .assets import router as assets_router
router.include_router(assets_router, prefix='/assets', tags=['root - CONTRATOS_DE_ENERGÍA - Mercado_regulado'])
from .Cer1739PrecioDeLaEnergíaExcedentariaDelAutoconsumo import router as Cer1739PrecioDeLaEnergíaExcedentariaDelAutoconsumo_router
router.include_router(Cer1739PrecioDeLaEnergíaExcedentariaDelAutoconsumo_router, prefix='/Cer1739PrecioDeLaEnergíaExcedentariaDelAutoconsumo', tags=['root - CONTRATOS_DE_ENERGÍA - Mercado_regulado'])
from .Cer1001TérminoDeFacturaciónDeEnergíaActivaDelPvpc20td import router as Cer1001TérminoDeFacturaciónDeEnergíaActivaDelPvpc20td_router
router.include_router(Cer1001TérminoDeFacturaciónDeEnergíaActivaDelPvpc20td_router, prefix='/Cer1001TérminoDeFacturaciónDeEnergíaActivaDelPvpc20td', tags=['root - CONTRATOS_DE_ENERGÍA - Mercado_regulado'])
