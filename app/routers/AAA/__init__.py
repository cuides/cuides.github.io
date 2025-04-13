from fastapi import APIRouter
router = APIRouter()
from .AAA import router as AAA_router
router.include_router(AAA_router, prefix='/AAA', tags=['root - AAA'])
