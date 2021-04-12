import React from 'react'
import MenuPrincipalAdministrador from './menus_principales/MenuPrincipalAdministrador'
import MenuPrincipalJugador from './menus_principales/MenuPrincipalJugador'

const MenuPrincipal = (props) => {
    const { usuario } = props
    const rol = "JUGADOR"

    switch (rol) {
        case "JUGADOR":
            return <MenuPrincipalJugador />
        case "ADMINISTRADOR":
            return <MenuPrincipalAdministrador />
        default:
            break;
    }
}

export default MenuPrincipal;