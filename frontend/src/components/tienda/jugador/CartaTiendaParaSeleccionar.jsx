import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { useCartaParaSeleccionar } from "../../../hooks/useCartaParaSeleccionar";
import { tiendaActions } from "../../../redux/reducers/tiendaReducer";
import CartaTienda from "./CartaTienda";

const CartaTiendaParaSeleccionar = ({carta, indice, agregarCartaAlCarro, quitarCartaAlCarro }) => {
    const { isSeleccionada, onSeleccionarCarta} = useCartaParaSeleccionar(quitarCartaAlCarro, agregarCartaAlCarro)
    return <CartaTienda {...carta} indice={indice} onClick={onSeleccionarCarta} isSeleccionada={isSeleccionada}/>
}
 

const mapDispatchToProps = dispatch => {
    const agregarCartaAlCarro = tiendaActions.agregarCartaAlCarro
    const quitarCartaAlCarro = tiendaActions.quitarCartaAlCarro

    return bindActionCreators(
        { agregarCartaAlCarro, quitarCartaAlCarro }, dispatch
    )
}

export default compose(
    connect(null, mapDispatchToProps)
)(CartaTiendaParaSeleccionar)
