from fastapi import APIRouter
router = APIRouter()
from .img import router as img_router
router.include_router(img_router, prefix='/img', tags=['root - ENERGÍA_FOTOVOLTAICA - Colectivo'])
