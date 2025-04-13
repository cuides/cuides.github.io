from fastapi import APIRouter
router = APIRouter()
from .assets import router as assets_router
router.include_router(assets_router, prefix='/assets', tags=['root - ENERGÍA_FOTOVOLTAICA - Individual'])
from .Aif030AnálisisDeOfertaDeAutoconsumo import router as Aif030AnálisisDeOfertaDeAutoconsumo_router
router.include_router(Aif030AnálisisDeOfertaDeAutoconsumo_router, prefix='/Aif030AnálisisDeOfertaDeAutoconsumo', tags=['root - ENERGÍA_FOTOVOLTAICA - Individual'])
from .Afc020AutoconsumoColectivoConExcedentesYConCompensaciónConectadaEnRedInterior import router as Afc020AutoconsumoColectivoConExcedentesYConCompensaciónConectadaEnRedInterior_router
router.include_router(Afc020AutoconsumoColectivoConExcedentesYConCompensaciónConectadaEnRedInterior_router, prefix='/Afc020AutoconsumoColectivoConExcedentesYConCompensaciónConectadaEnRedInterior', tags=['root - ENERGÍA_FOTOVOLTAICA - Individual'])
