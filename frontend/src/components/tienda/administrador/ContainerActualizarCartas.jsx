import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { actualizarCartasDeTiendaAdministrador } from "../../../redux/actionCreators/tienda";
import BotonActualizarCartas from "./BotonActualizarCartas";

const ContainerActualizarCartas = ({ actualizarCartasDeTiendaAdministrador, pageNumber, pageSize }) => {
    return <BotonActualizarCartas onClick={() => actualizarCartasDeTiendaAdministrador(pageNumber, pageSize)} />
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { actualizarCartasDeTiendaAdministrador }, dispatch
    )
}

export default compose(
    connect(null, mapDispatchToProps)
)(ContainerActualizarCartas)
