import getAxiosInstance from "../../config/httpClient"
import { USUARIOS } from "../../utils/enpoints"

const BASE = USUARIOS.BASE

export const crearUsuario = async (values) => {
    const res = await getAxiosInstance().post(BASE, values)
    return res
}

export const actualizarUsuario = async (id, values) => {
    const url = USUARIOS.BY_ID(id)
    const res = await getAxiosInstance().put(url, values)
    return res
}

export const getUsuarioById = async (id) => {
    const url = USUARIOS.BY_ID(id)
    const res = await getAxiosInstance().get(url)
    return res
}

export const getAllUsuarios = async (params) => {
    const res = await getAxiosInstance().get(BASE, params)
    return res
}

export const borrarUsuarios = async (params) => {
    const res = await getAxiosInstance().delete(BASE, {data: params})
    return res
}