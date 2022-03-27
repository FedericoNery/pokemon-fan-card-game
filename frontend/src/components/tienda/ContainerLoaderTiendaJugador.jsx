import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { useCartasEnTienda } from "../../hooks/useCartasEnTienda";
import { fetchCartasEdicionTienda, fetchCartasFiltradasTienda } from "../../redux/actionCreators/tienda";
import TiendaJugador from "./jugador/TiendaJugador";


const ContainerLoaderTiendaJugador = ({ fetchCartasEdicionTienda, fetchCartasFiltradasTienda, isLoadingCartas, isLoadingCartasFiltradas }) => {
    useEffect(() => {
        fetchCartasEdicionTienda()
        fetchCartasFiltradasTienda()
    },[])

    const cartas = useCartasEnTienda()
    const isLoading = !isLoadingCartas && !isLoadingCartasFiltradas
    return isLoading && <TiendaJugador cartas={cartas}/>
}
 
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      { fetchCartasEdicionTienda, fetchCartasFiltradasTienda }, dispatch
    )
  }
  
  export default compose(
    connect(null, mapDispatchToProps)
  )(ContainerLoaderTiendaJugador)