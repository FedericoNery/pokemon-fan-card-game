import getAxiosInstance from "../../config/httpClient"
import { USUARIOS } from "../../utils/enpoints"

export const getCantidadPartidas = async (id) => {
    const url = USUARIOS.BASE + USUARIOS.PARTIDAS(id)
    const res = await getAxiosInstance().get(url)
    return res
}