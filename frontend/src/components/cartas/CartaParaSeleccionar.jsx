import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { juegoActions } from '../../redux/reducers/juegoReducer'
import CartaStrategy from './CartaStrategy';

const CartaParaSeleccionar = ({ carta, agregarCartaSeleccionada, quitarCartaSeleccionada }) => {
    const [isSeleccionada, setIsSeleccionada] = useState(false)

    const onSeleccionarCarta = (numeroCarta) => {
        if(isSeleccionada){
            setIsSeleccionada(false)
            quitarCartaSeleccionada(numeroCarta)
        }
        else{
            setIsSeleccionada(true)
            agregarCartaSeleccionada(numeroCarta)
        }
    }

    return <CartaStrategy carta={carta} onClick={onSeleccionarCarta} isSeleccionada={isSeleccionada}/>;
}
 
const mapDispatchToProps = dispatch => {
    const agregarCartaSeleccionada = juegoActions.agregarCartaSeleccionada
    const quitarCartaSeleccionada = juegoActions.quitarCartaSeleccionada

    return bindActionCreators(
        { agregarCartaSeleccionada, quitarCartaSeleccionada }, dispatch
    )
}

export default compose(
    connect(null, mapDispatchToProps)
)(CartaParaSeleccionar)