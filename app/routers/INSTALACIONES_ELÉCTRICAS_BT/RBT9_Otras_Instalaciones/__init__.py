from fastapi import APIRouter
router = APIRouter()
from .Btx040FiltroDeArmónicos import router as Btx040FiltroDeArmónicos_router
router.include_router(Btx040FiltroDeArmónicos_router, prefix='/Btx040FiltroDeArmónicos', tags=['root - INSTALACIONES_ELÉCTRICAS_BT - RBT9_Otras_Instalaciones'])
from .Btx047InstalaciónDeComunicaciónDeSaiLegrand import router as Btx047InstalaciónDeComunicaciónDeSaiLegrand_router
router.include_router(Btx047InstalaciónDeComunicaciónDeSaiLegrand_router, prefix='/Btx047InstalaciónDeComunicaciónDeSaiLegrand', tags=['root - INSTALACIONES_ELÉCTRICAS_BT - RBT9_Otras_Instalaciones'])
from .Btx060SistemaDeAlimentaciónIninterrumpidaSai import router as Btx060SistemaDeAlimentaciónIninterrumpidaSai_router
router.include_router(Btx060SistemaDeAlimentaciónIninterrumpidaSai_router, prefix='/Btx060SistemaDeAlimentaciónIninterrumpidaSai', tags=['root - INSTALACIONES_ELÉCTRICAS_BT - RBT9_Otras_Instalaciones'])
from .Btx030BateríaDeCondensadores import router as Btx030BateríaDeCondensadores_router
router.include_router(Btx030BateríaDeCondensadores_router, prefix='/Btx030BateríaDeCondensadores', tags=['root - INSTALACIONES_ELÉCTRICAS_BT - RBT9_Otras_Instalaciones'])
