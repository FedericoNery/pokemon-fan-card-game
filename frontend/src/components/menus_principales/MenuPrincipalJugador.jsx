import React from 'react'
import MenuAppBarJugador from '../menu-lateral/MenuAppBarJugador'

const MenuPrincipalJugador = (props) => {
    return <MenuAppBarJugador>
        {props.children}
    </MenuAppBarJugador>
}

export default MenuPrincipalJugador;
