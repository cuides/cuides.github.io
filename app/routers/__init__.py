from fastapi import APIRouter
router = APIRouter()
from .ENERGÍA_FOTOVOLTAICA import router as ENERGÍA_FOTOVOLTAICA_router
router.include_router(ENERGÍA_FOTOVOLTAICA_router, prefix='/ENERGÍA_FOTOVOLTAICA', tags=['root'])
from .Agr010PantallasTérmicasEnInvernaderos import router as Agr010PantallasTérmicasEnInvernaderos_router
router.include_router(Agr010PantallasTérmicasEnInvernaderos_router, prefix='/Agr010PantallasTérmicasEnInvernaderos', tags=['root'])
from .Renovables import router as Renovables_router
router.include_router(Renovables_router, prefix='/Renovables', tags=['root'])
from .EFICIENCIA_ENERGETICA import router as EFICIENCIA_ENERGETICA_router
router.include_router(EFICIENCIA_ENERGETICA_router, prefix='/EFICIENCIA_ENERGETICA', tags=['root'])
from .AAA import router as AAA_router
router.include_router(AAA_router, prefix='/AAA', tags=['root'])
from .CONTRATOS_DE_ENERGÍA import router as CONTRATOS_DE_ENERGÍA_router
router.include_router(CONTRATOS_DE_ENERGÍA_router, prefix='/CONTRATOS_DE_ENERGÍA', tags=['root'])
from .INSTALACIONES_ELÉCTRICAS_BT import router as INSTALACIONES_ELÉCTRICAS_BT_router
router.include_router(INSTALACIONES_ELÉCTRICAS_BT_router, prefix='/INSTALACIONES_ELÉCTRICAS_BT', tags=['root'])
from .CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE import router as CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE_router
router.include_router(CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE_router, prefix='/CERTIFICADOS_DE_AHORRO_ENERGÉTICO_CAE', tags=['root'])
