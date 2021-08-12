import React from 'react'
import { useRolUsuario } from '../hooks/useRolUsuario'
import { ROLES } from '../utils/enumRoles'
import MenuPrincipalAdministrador from './menus_principales/MenuPrincipalAdministrador'
import MenuPrincipalJugador from './menus_principales/MenuPrincipalJugador'

const MenuPrincipal = (props) => {
    const rol = useRolUsuario()

    const menus = {
        [ROLES.JUGADOR] : <MenuPrincipalJugador>{props.children}</MenuPrincipalJugador>,
        [ROLES.ADMINISTRADOR] : <MenuPrincipalAdministrador>{props.children}</MenuPrincipalAdministrador>,
        "" : <></>
    }
    
    return menus[rol]
}

export default MenuPrincipal;