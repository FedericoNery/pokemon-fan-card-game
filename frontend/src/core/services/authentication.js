import getAxiosInstance from "../../config/httpClient"

export const iniciarSesion = async (values) => {
    const res = await getAxiosInstance().post("/authentication", values)
    return res
}
