import getAxiosInstance from "../../config/httpClient"
import { CARTAS_POKEMON } from "../../utils/enpoints"

export const getAllCartasPokemon = async () => {
    const url = CARTAS_POKEMON.BASE
    const res = await getAxiosInstance().get(url)
    return res
}