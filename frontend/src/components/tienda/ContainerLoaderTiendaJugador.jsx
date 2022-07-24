import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { useCartasEnTienda } from "../../hooks/useCartasEnTienda";
import { fetchCartasEdicionTienda, fetchCartasFiltradasTienda } from "../../redux/actionCreators/tienda";
import TiendaJugador from "./jugador/TiendaJugador";
import { useAsyncRetry } from 'react-use';
import { useFiltroCartasEnTienda } from "../../hooks/useFiltroCartasEnTienda";
import { useCartasEnTiendaFiltradas } from "../../hooks/useCartasEnTiendaFiltradas";
import { getCartasEnTienda } from "../../core/services/tienda";

const ContainerLoaderTiendaJugador = ({ fetchCartasEdicionTienda, fetchCartasFiltradasTienda, isLoadingCartas, isLoadingCartasFiltradas }) => {
  /* useEffect(() => {
    fetchCartasEdicionTienda()
    //fetchCartasFiltradasTienda()
  }, []) */

  const filtro = useFiltroCartasEnTienda()
  const { loading, error, value, retry } = useAsyncRetry(async () => getCartasEnTienda(filtro), [filtro]);

  //const cartas = useCartasEnTienda()
  //const cartasFiltradasEnTienda = useCartasEnTiendaFiltradas()
  console.log(value)
  //const isLoading = !isLoadingCartas && !loading
  return !loading && <TiendaJugador cartas={value.data} />
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchCartasEdicionTienda, fetchCartasFiltradasTienda }, dispatch
  )
}

export default compose(
  connect(null, mapDispatchToProps)
)(ContainerLoaderTiendaJugador)