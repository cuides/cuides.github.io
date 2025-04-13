from fastapi import APIRouter
router = APIRouter()
from .RBT7_Instalaciones_Especiales import router as RBT7_Instalaciones_Especiales_router
router.include_router(RBT7_Instalaciones_Especiales_router, prefix='/RBT7_Instalaciones_Especiales', tags=['root - INSTALACIONES_ELÉCTRICAS_BT'])
from .RBT2_Instalaciones_Interiores import router as RBT2_Instalaciones_Interiores_router
router.include_router(RBT2_Instalaciones_Interiores_router, prefix='/RBT2_Instalaciones_Interiores', tags=['root - INSTALACIONES_ELÉCTRICAS_BT'])
from .RBT5_Instalaciones_En_Locales_De_Pública_Concurrencia import router as RBT5_Instalaciones_En_Locales_De_Pública_Concurrencia_router
router.include_router(RBT5_Instalaciones_En_Locales_De_Pública_Concurrencia_router, prefix='/RBT5_Instalaciones_En_Locales_De_Pública_Concurrencia', tags=['root - INSTALACIONES_ELÉCTRICAS_BT'])
from .RBT8_Anexos import router as RBT8_Anexos_router
router.include_router(RBT8_Anexos_router, prefix='/RBT8_Anexos', tags=['root - INSTALACIONES_ELÉCTRICAS_BT'])
from .RBT9_Otras_Instalaciones import router as RBT9_Otras_Instalaciones_router
router.include_router(RBT9_Otras_Instalaciones_router, prefix='/RBT9_Otras_Instalaciones', tags=['root - INSTALACIONES_ELÉCTRICAS_BT'])
from .RBT0_Memoria_Técnica_De_Diseño import router as RBT0_Memoria_Técnica_De_Diseño_router
router.include_router(RBT0_Memoria_Técnica_De_Diseño_router, prefix='/RBT0_Memoria_Técnica_De_Diseño', tags=['root - INSTALACIONES_ELÉCTRICAS_BT'])
from .RBT1_Instalaciones_De_Enlace import router as RBT1_Instalaciones_De_Enlace_router
router.include_router(RBT1_Instalaciones_De_Enlace_router, prefix='/RBT1_Instalaciones_De_Enlace', tags=['root - INSTALACIONES_ELÉCTRICAS_BT'])
from .RBT4_Instalaciones_De_Alumbrado_Exterior import router as RBT4_Instalaciones_De_Alumbrado_Exterior_router
router.include_router(RBT4_Instalaciones_De_Alumbrado_Exterior_router, prefix='/RBT4_Instalaciones_De_Alumbrado_Exterior', tags=['root - INSTALACIONES_ELÉCTRICAS_BT'])
from .RBT6_Protecciones import router as RBT6_Protecciones_router
router.include_router(RBT6_Protecciones_router, prefix='/RBT6_Protecciones', tags=['root - INSTALACIONES_ELÉCTRICAS_BT'])
