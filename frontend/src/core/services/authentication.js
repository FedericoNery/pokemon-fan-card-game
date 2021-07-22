import getAxiosInstance from "../../config/httpClient"
import { USUARIOS } from "../../utils/enpoints"

const BASE = USUARIOS.BASE

export const iniciarSesion = async (values) => {
    const res = await getAxiosInstance().post(BASE + USUARIOS.AUTHENTICATE, values)
    return res
}