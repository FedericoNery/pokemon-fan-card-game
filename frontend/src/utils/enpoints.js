export const AUTHENTICATION = {
    BASE: "/authentication"
}

export const USUARIOS = {
    BASE : "usuarios",
    BY_ID: (id) => `usuarios/${id}`,
    AUTHENTICATE : "/authenticate",
    PARTIDAS: (id) => `/${id}/partidas`
}

export const MAZOS = {
    BASE : "mazos",
    BY_ID_CARTAS: (id) => `mazos/${id}/cartas`,
    BY_ID : (id) => `/${id}`,
}

export const JUEGO = {
    BASE : "juego",
    INICIAR: "juego/iniciar",
    INVOCAR_CARTAS: "juego/invocar",
    INICIAR_BATALLA: "juego/batallar"
}

export const CARTAS_POKEMON = {
    BASE : "cartaspokemon",
}

export const CARTAS_ENERGIA = {
    BASE : "cartasenergia",
}

export const TIENDA = {
    BASE : "tienda",
    COMPRAR: (id) => `tienda/${id}`,
    OFERTAS : "tienda/ofertas",
    DISPONIBLES : "tienda/disponibles",
}