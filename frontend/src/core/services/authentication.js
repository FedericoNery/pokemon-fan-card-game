import getAxiosInstance from "../../config/httpClient"
import { AUTHENTICATION } from "../../utils/enpoints"

export const iniciarSesion = async (values) => {
    const res = await getAxiosInstance().post("/authentication", values)
    return res
}