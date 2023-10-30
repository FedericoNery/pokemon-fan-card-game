import getAxiosInstance from "../../config/httpClient"
import { CARTAS_ENERGIA } from "../../utils/enpoints"

export const getAllCartasEnergia = async () => {
    const url = CARTAS_ENERGIA.BASE
    const res = await getAxiosInstance().get(url)
    return res
}