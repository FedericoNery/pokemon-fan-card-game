import React, { useContext } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { actualizarCartasDeTiendaAdministrador } from "../../../redux/actionCreators/tienda";
import { ContextToastContainer } from "../../ui/toasts/ToastContainer";
import BotonActualizarCartas from "./BotonActualizarCartas";

const ContainerActualizarCartas = ({ actualizarCartasDeTiendaAdministrador, pageNumber, pageSize }) => {
    const toast = useContext(ContextToastContainer)

    async function actualizarCartas (pageNumber, pageSize){
        try{
            actualizarCartasDeTiendaAdministrador(pageNumber, pageSize)
            toast.success("Se actualizó la tienda correctamente")
        }
        catch(error){
            toast.error(error.toString())
        }
    }

    return <BotonActualizarCartas onClick={() => actualizarCartas(pageNumber, pageSize)} />
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { actualizarCartasDeTiendaAdministrador }, dispatch
    )
}

export default compose(
    connect(null, mapDispatchToProps)
)(ContainerActualizarCartas)
