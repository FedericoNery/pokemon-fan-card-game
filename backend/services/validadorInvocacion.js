const CODIGO_TIPO_CARTA = require('../utils/enums').CODIGO_TIPO_CARTA 

const obtenerEnergias = (mano) => {
    return {
        incoloro: contarEnergias(mano, CODIGO_TIPO_CARTA.INCOLORO),
        fuego : contarEnergias(mano, CODIGO_TIPO_CARTA.FUEGO),
        tierra : contarEnergias(mano, CODIGO_TIPO_CARTA.TIERRA),
        rayo : contarEnergias(mano, CODIGO_TIPO_CARTA.RAYO),
        dragon : contarEnergias(mano, CODIGO_TIPO_CARTA.DRAGON),
        hierba : contarEnergias(mano, CODIGO_TIPO_CARTA.HIERBA),
        agua : contarEnergias(mano, CODIGO_TIPO_CARTA.AGUA),
        fairy : contarEnergias(mano, CODIGO_TIPO_CARTA.FAIRY),
        oscuro: contarEnergias(mano, CODIGO_TIPO_CARTA.OSCURO),
        lucha: contarEnergias(mano, CODIGO_TIPO_CARTA.LUCHA),
        psiquico: contarEnergias(mano, CODIGO_TIPO_CARTA.PSIQUICO),
        metal: contarEnergias(mano, CODIGO_TIPO_CARTA.METAL),
    }
}