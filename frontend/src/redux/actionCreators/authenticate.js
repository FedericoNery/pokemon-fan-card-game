import { iniciarSesion } from "../../core/services/authentication"
import { authenticateActions } from "../reducers/authenticateReducer"
import jwt_decode from "jwt-decode";

export const loguearse = (payload) => async dispatch => {
    try {
        const response = await iniciarSesion(payload)
        const { token } = response.data
        const usuario = jwt_decode(token);
        dispatch(authenticateActions.loguearse({usuario, token}))
    }
    catch (error) {
        throw Error(error)
    }
}

export const desloguearse = (payload) => async dispatch => {
    try {
        //const response = await cerrarSesion(payload)
        //const usuarioLogueado = response.data
        dispatch(authenticateActions.desloguearse())
    }
    catch (error) {
        throw Error(error)
    }
}
