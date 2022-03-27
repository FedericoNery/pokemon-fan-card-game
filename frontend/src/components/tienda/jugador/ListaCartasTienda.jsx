import React from "react";
import CartaTiendaParaSeleccionar from "./CartaTiendaParaSeleccionar";

const ListaCartasTienda = ({ cartas }) => {
    return cartas.map((carta, index) => <CartaTiendaParaSeleccionar carta={carta} indice={index}/>)
}
 
export default ListaCartasTienda;