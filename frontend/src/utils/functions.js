import { rgbToHex } from "@material-ui/core"

export const getNumeroPokemon = (codigoPokemon) => {
    const numeroSinCeros = codigoPokemon.replace("P", '')
    let numero = numeroSinCeros
    for (let index = numeroSinCeros.length; index < 3; index++) {
        numero = "0" + numero 
    }
    return numero
}

const CODIGO_TIPO_CARTA ={
    INCOLORO: 'Incoloro',
    FUEGO: 'Fuego',
    TIERRA: 'Tierra',
    RAYO: 'Rayo',
    DRAGON: 'Dragon',
    HIERBA : 'Hierba',
    AGUA : 'Agua',
    FAIRY : 'Celestial',
    OSCURO: 'Oscuro',
    LUCHA: 'Lucha',
    PSIQUICO: 'Psiquico',
    METAL: 'Metal',
}

export const getBackgroundColorPokemon = (tipoPokemon) => {
    const colors = {
        [CODIGO_TIPO_CARTA.AGUA]: "#70cdff",
        [CODIGO_TIPO_CARTA.DRAGON]: "#dbd8d5",
        [CODIGO_TIPO_CARTA.FAIRY]: "#ff70cd",
        [CODIGO_TIPO_CARTA.FUEGO]: "#ff7070",
        [CODIGO_TIPO_CARTA.HIERBA]: "#91ff70",
        [CODIGO_TIPO_CARTA.INCOLORO]: "#ffffff",
        [CODIGO_TIPO_CARTA.LUCHA]: "#ffac70",
        [CODIGO_TIPO_CARTA.METAL]: "#646b6b",
        [CODIGO_TIPO_CARTA.OSCURO]: "#2f3333",
        [CODIGO_TIPO_CARTA.PSIQUICO]: "#b370ff",
        [CODIGO_TIPO_CARTA.RAYO]: "#fffa70",
        [CODIGO_TIPO_CARTA.TIERRA]: "#785220",
    }

    return colors[tipoPokemon]
}