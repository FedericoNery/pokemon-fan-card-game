import { connect } from "react-redux";
import { useAsyncRetry } from 'react-use';
import { bindActionCreators, compose } from "redux";
import { getCartasEnTienda } from "../../core/services/tienda";
import { useFiltroCartasEnTienda } from "../../hooks/useFiltroCartasEnTienda";
import { fetchCartasEdicionTienda, fetchCartasFiltradasTienda } from "../../redux/actionCreators/tienda";
import TiendaJugador from "./jugador/TiendaJugador";

const ContainerLoaderTiendaJugador = ({ fetchCartasEdicionTienda, fetchCartasFiltradasTienda, isLoadingCartas, isLoadingCartasFiltradas }) => {
  const filtro = useFiltroCartasEnTienda()
  const { loading, value } = useAsyncRetry(async () => getCartasEnTienda(filtro), [filtro]);

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
