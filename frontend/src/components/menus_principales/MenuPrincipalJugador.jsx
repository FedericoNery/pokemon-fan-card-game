import React from 'react'
import MenuAppBarVer from '../menu-lateral/MenuAppBarVer'

const MenuPrincipalJugador = (props) => {
    return <MenuAppBarVer>
        {props.children}
    </MenuAppBarVer>
}
 
export default MenuPrincipalJugador;