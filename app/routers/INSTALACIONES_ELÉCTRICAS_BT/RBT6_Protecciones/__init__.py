from fastapi import APIRouter
router = APIRouter()
from .Bt240ProtecciónContraContactosIndirectos import router as Bt240ProtecciónContraContactosIndirectos_router
router.include_router(Bt240ProtecciónContraContactosIndirectos_router, prefix='/Bt240ProtecciónContraContactosIndirectos', tags=['root - INSTALACIONES_ELÉCTRICAS_BT - RBT6_Protecciones'])
from .Bt220ProtecciónContraSobreintensidades import router as Bt220ProtecciónContraSobreintensidades_router
router.include_router(Bt220ProtecciónContraSobreintensidades_router, prefix='/Bt220ProtecciónContraSobreintensidades', tags=['root - INSTALACIONES_ELÉCTRICAS_BT - RBT6_Protecciones'])
