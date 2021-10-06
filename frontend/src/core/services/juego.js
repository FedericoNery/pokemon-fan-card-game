import getAxiosInstance from "../../config/httpClient"
import { JUEGO } from "../../utils/enpoints"

export const empezarJuego = async (values) => {
    const url = JUEGO.INICIAR
    const res = await getAxiosInstance().post(url, values)
    return res
}

export const invocarCartas = async (values) => {
    const url = JUEGO.INVOCAR_CARTAS
    const res = await getAxiosInstance().post(url, values)
    return res
}

export const iniciarBatallaJuego = async (values) => {
    const url = JUEGO.INICIAR_BATALLA
    const res = await getAxiosInstance().post(url, values)
    return res
}