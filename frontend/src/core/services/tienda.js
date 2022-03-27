import getAxiosInstance from "../../config/httpClient"
import { TIENDA } from "../../utils/enpoints"
const BASE = TIENDA.BASE

export const getCartasEnTienda = async (params) => {
    const res = await getAxiosInstance().get(BASE, params)
    return res
}

export const getCartasEnTiendaOfertas = async (params) => {
    const res = await getAxiosInstance().get(TIENDA.OFERTAS, params)
    return res
}

export const getCartasEnTiendaDisponibles = async (params) => {
    const res = await getAxiosInstance().get(TIENDA.DISPONIBLES, params)
    return res
}

export const comprarCartasEnTienda = async (idUsuario, values) => {
    const res = await getAxiosInstance().post(TIENDA.COMPRAR(idUsuario), values)
    return res
}

export const actualizarCartasEnTienda = async (values) => {
    const res = await getAxiosInstance().put(BASE, values)
    return res
}