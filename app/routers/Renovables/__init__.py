from fastapi import APIRouter
router = APIRouter()
from .EOLICA import router as EOLICA_router
router.include_router(EOLICA_router, prefix='/EOLICA', tags=['root - Renovables'])
