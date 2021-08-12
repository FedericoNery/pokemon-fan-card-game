export const USUARIOS = {
    BASE : "usuarios",
    AUTHENTICATE : "/authenticate",
}

export const MAZOS = {
    BASE : "mazos",
    BY_ID_CARTAS: (id) => `mazos/${id}/cartas`,
    BY_ID : (id) => `/${id}`,
}