import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { tiendaActions } from '../../redux/reducers/tiendaReducer'

const CartaParaSeleccionar = ({ carta, 
    agregarCartaComoDisponible, quitarCartaComoDisponible,
    agregarCartaComoOferta, quitarCartaComoOferta,
}) => {
    const [isSeleccionada, setIsSeleccionada] = useState(false)
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

    return <CartaPokemon {...carta} onClick={() => onClick(numero)} isSeleccionada={isSeleccionada}/>;
}
 
const mapDispatchToProps = dispatch => {
    const agregarCartaComoDisponible = tiendaActions.agregarCartaComoDisponible
    const quitarCartaComoDisponible = tiendaActions.quitarCartaComoDisponible
    const agregarCartaComoOferta = tiendaActions.agregarCartaComoOferta
    const quitarCartaComoOferta = tiendaActions.quitarCartaComoOferta

    return bindActionCreators(
        { agregarCartaComoDisponible, quitarCartaComoDisponible,
            agregarCartaComoOferta, quitarCartaComoOferta }, dispatch
    )
}

export default compose(
    connect(null, mapDispatchToProps)
)(CartaParaSeleccionar)