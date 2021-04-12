export const ROUTES = {
    HOME: `/`,
    LOGIN: `/login`,
    MENU_PRINCIPAL: `/menu-principal`,
    MAZOS: `/mazos`,
    SELECCION_MAZO: `/seleccion-mazo`,
    JUEGO: `/juego`,
    JUEGO_FINALIZADO: `/juego-finalizado`,
    DATOS_USUARIO: `/datos-usuario`,
}

export const To = {
    home: () => ROUTES.HOME,
    login: () => ROUTES.LOGIN,
    menuPrincipal: () => ROUTES.MENU_PRINCIPAL,
    juego: () => ROUTES.JUEGO,
    datosUsuario: () => ROUTES.DATOS_USUARIO,
}
