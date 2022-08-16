export const ROUTES = {
    HOME: `/`,
    LOGIN: `/login`,
    MENU_PRINCIPAL: `/menu-principal`,
    MAZOS: `/mazos`,
    MAZO_DETALLADO: `/mazo-detallado`,
    MAZO_DETALLADO_WITH_ID: `/mazo-detallado/:id`,
    SELECCION_MAZO: `/seleccion-mazo`,
    SELECCION_MAZO_MULTIPLAYER: `/seleccion-mazo-multiplayer`,
    JUEGO: `/juego`,
    JUEGO_FINALIZADO: `/juego-finalizado`,
    DATOS_USUARIO: `/datos-usuario`,
    TIENDA: `/tienda`,
    SIGNUP: `/signup`,
    PERFIL_USUARIO: '/perfil',
    LISTADO_USUARIOS: '/listado-usuarios',
    ESPERANDO_OTRO_JUGADOR: '/esperando-otro-jugador',
    LISTADO_DE_ROOMS: '/rooms-disponibles',
    CREATE_OR_JOIN_ROOM: '/creando-juego',
    CREATE_ROOM: "/create-room"
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
    seleccionarMazoDeJuego: () => ROUTES.SELECCION_MAZO,
    seleccionarMazoDeJuegoMultiplayer: () => ROUTES.SELECCION_MAZO_MULTIPLAYER,
    signup: () => ROUTES.SIGNUP,
    perfilUsuario: () => ROUTES.PERFIL_USUARIO,
    listadoUsuarios: () => ROUTES.LISTADO_USUARIOS,
    esperandoQueSeConecteOtroJugador: () => ROUTES.ESPERANDO_OTRO_JUGADOR,
    listadoDeRooms: () => ROUTES.LISTADO_DE_ROOMS
}
