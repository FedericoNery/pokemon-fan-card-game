export const ROUTES = {
    HOME: `/`,
    LOGIN: `/login`,
    MENU_PRINCIPAL: `/menu-principal`,
    MAZOS: `/mazos`,
    MAZO_DETALLADO: `/mazo-detallado`,
    MAZO_DETALLADO_WITH_ID: `/mazo-detallado/:id`,
    SELECCION_MAZO: `/seleccion-mazo`,
    JUEGO: `/juego`,
    JUEGO_FINALIZADO: `/juego-finalizado`,
    DATOS_USUARIO: `/datos-usuario`,
    TIENDA: `/tienda`,
}

export const To = {
    home: () => ROUTES.HOME,
    login: () => ROUTES.LOGIN,
    menuPrincipal: () => ROUTES.MENU_PRINCIPAL,
    juego: () => ROUTES.JUEGO,
    datosUsuario: () => ROUTES.DATOS_USUARIO,
    mazos: () => ROUTES.MAZOS,
    tienda: () => ROUTES.TIENDA,
    mazoDetallado: (idMazo) => `${ROUTES.MAZO_DETALLADO}/${idMazo}`,
}
