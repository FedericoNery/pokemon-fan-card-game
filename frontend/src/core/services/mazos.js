import getAxiosInstance from "../../config/httpClient"
import { MAZOS } from "../../utils/enpoints"

export const getMazoById = async (id) => {
    const url = MAZOS.BASE + MAZOS.BY_ID(id)
    const res = await getAxiosInstance().get(url)
    return res
}

export const getCartasDelMazoById = async (id) => {
    const url = MAZOS.BY_ID_CARTAS(id)
    const res = await getAxiosInstance().get(url)
    return res
}

export const putCartasDelMazoById = async (idMazo, idsCartas) => {
  const url = MAZOS.BASE + MAZOS.BY_ID(idMazo)
  const res = await getAxiosInstance().put(url, { idsCartas })
  return res
}
