import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { useCartasEnTienda } from "../../hooks/useCartasEnTienda";
import { fetchCartasEdicionTienda } from "../../redux/actionCreators/tienda";
import TablaCartas from "./administrador/TablaCartas";

const ContainerLoaderTienda = ({ fetchCartasEdicionTienda, isLoadingCartas }) => {
    useEffect(() => {
        fetchCartasEdicionTienda()
    },[])
    
    const cartas = useCartasEnTienda()

    return !isLoadingCartas && <TablaCartas cartas={cartas}/>
}
 
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      { fetchCartasEdicionTienda }, dispatch
    )
  }
  
  export default compose(
    connect(null, mapDispatchToProps)
  )(ContainerLoaderTienda)