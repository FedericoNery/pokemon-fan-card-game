import React from 'react'
import { useCartasEnTiendaFiltradas } from '../../../hooks/useCartasEnTiendaFiltradas';
import ListaCartasTienda from './ListaCartasTienda';

const TablaCartas = ({ cartas }) => {
    //const cartas = useCartasEnTiendaFiltradas()
    return <ListaCartasTienda cartas={cartas}/>
}
 
export default TablaCartas;