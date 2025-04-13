from fastapi import APIRouter
router = APIRouter()
from .Era010Aerotermia import router as Era010Aerotermia_router
router.include_router(Era010Aerotermia_router, prefix='/Era010Aerotermia', tags=['root - EFICIENCIA_ENERGETICA - Residencial'])
