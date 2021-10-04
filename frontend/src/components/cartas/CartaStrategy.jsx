import React from 'react'
import CartaPokemon from './CartaPokemon'
import CartaEnergia from './CartaEnergia'

const CartaStrategy = ({ carta, onClick, isSeleccionada }) => {
    const { numero } = carta

    if (numero.includes("P")) {
        return <CartaPokemon {...carta} onClick={() => onClick(numero)} isSeleccionada={isSeleccionada}/>
    }
    if (numero.includes("E")) {
        return <CartaEnergia {...carta} onClick={() => onClick(numero)} isSeleccionada={isSeleccionada}/>
    }

    return <></>
}

export default CartaStrategy;