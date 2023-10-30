import React from "react";
import { getAllCartasPokemon } from "../../../core/services/cartasPokemon";
import { useFetch } from "../../../hooks/useFetch";
import CartasSeleccionarJugador from "../../juego/CartasSeleccionarJugador";

const AdministracionTienda = () => {
    const { isLoading, values } = useFetch({}, getAllCartasPokemon);
    //TODO -> Generar carta propia para administración con checkbox que pongan cual está de oferta o no
    //Tal vez sería mejor una tabla con el listado de cartas y que marque como si fuese un excel?
    return !isLoading && <CartasSeleccionarJugador cartas={values}/>
}

export default AdministracionTienda;
