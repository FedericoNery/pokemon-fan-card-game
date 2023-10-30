const CODIGO_TIPO_CARTA = require('../utils/enums').CODIGO_TIPO_CARTA

const cartasEnergia = [
    {
        numero: "E1",
        nombre: "1x e-Eléctrica",
        energias:
            [//tipo_energia:
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.RAYO
                }
            ]
    },
    {
        numero: "E2",
        nombre: "1x e-Psíquica",
        energias:
            [//tipo_energia:
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.PSIQUICO
                }
            ]
    },
    {
        numero: "E3",
        nombre: "1x e-Hierba",
        energias:
            [//tipo_energia:
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.HIERBA
                }
            ]
    },
    {
        numero: "E4",
        nombre: "1x e-Agua",
        energias:
            [//tipo_energia:
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.AGUA
                }
            ]
    },
    {
        numero: "E5",
        nombre: "1x e-Fuego",
        energias:
            [//tipo_energia:
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.FUEGO
                }
            ]
    },
    {
        numero: "E6",
        nombre: "1x e-Normal",
        energias:
            [//tipo_energia:
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.INCOLORO
                }
            ]
    },
    {
        numero: "E7",
        nombre: "1x e-Tierra",
        energias:
            [//tipo_energia:
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.TIERRA
                }
            ]
    },
    {
        numero: "E8",
        nombre: "1x e-Oscura",
        energias:
            [//tipo_energia:
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.OSCURO
                }
            ]
    },
    {
        numero: "E9",
        nombre: "1x e-Lucha",
        energias:
            [//tipo_energia:
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.LUCHA
                }
            ]
    },
    {
        numero: "E10",
        nombre: "1x e-Metal",
        energias:
            [
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.METAL
                }
            ]
    },
    {
        numero: "E11",
        nombre: "1x e-Dragon",
        energias:
            [
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.DRAGON
                }
            ]
    },
    {
        numero: "E12",
        nombre: "1x e-Celestial",
        energias:
            [
                {
                    numero: 1,
                    nombre: CODIGO_TIPO_CARTA.FAIRY
                }
            ]
    },
]

module.exports = cartasEnergia