import { getCartasEnTienda, actualizarCartasEnTienda } from "../../core/services/tienda"
import { tiendaActions } from "../reducers/tiendaReducer"

export const fetchCartasEdicionTienda = () => async dispatch => {
    try {
        dispatch(tiendaActions.fetchCartasStart())
        const res = await getCartasEnTienda()
        dispatch(tiendaActions.guardarCartas(res.data))
        dispatch(tiendaActions.fetchCartasFinish())
    }
    catch (error) {

    }
}

export const fetchCartasFiltradasTienda = (filtro) => async dispatch => {
    try {
        dispatch(tiendaActions.fetchCartasFiltradasStart())
        const res = await getCartasEnTienda(filtro)
        dispatch(tiendaActions.guardarCartasFiltradas(res.data))
        dispatch(tiendaActions.fetchCartasFiltradasFinish())
    }
    catch (error) {
    }
}


function mapCartasToApi(cartas) {
    return cartas.map(carta => {
        return {
            id: carta._id,
            disponible_en_tienda: carta.disponible_en_tienda,
            oferta_en_tienda: carta.oferta_en_tienda,
            precio: carta.precio
        }
    })
}


function getCartasAModificar(indiceMinimo, indiceMaximo, cartas) {
    const listaProcesadaDeCartas = []
    for (let index = indiceMinimo; index < indiceMaximo; index++) {
        const element = cartas[index]
        listaProcesadaDeCartas.push(element)
    }
    return listaProcesadaDeCartas
}

export const actualizarCartasDeTiendaAdministrador = (pageNumber, pageSize) => async (dispatch, getState) => {

    try {
        const cartas = getState().tiendaReducer.cartas
        //cartas, calcular posicion minima y maxima y extraer según indice
        dispatch(tiendaActions.startUpdateCartasTiendaAdministrador())
        const indiceMinimo = (pageNumber - 1) * pageSize
        const indiceMaximo = pageNumber * pageSize
        const cartasAModificar = getCartasAModificar(indiceMinimo, indiceMaximo, cartas)
        const cartasMappeadas = mapCartasToApi(cartasAModificar)
        const res = await actualizarCartasEnTienda({cartas: cartasMappeadas})
        dispatch(tiendaActions.finishUpdateCartasTiendaAdministrador())
    }
    catch (error) {
    }
}
