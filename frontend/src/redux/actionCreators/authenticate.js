import { iniciarSesion } from "../../core/services/authentication"
import { authenticateActions } from "../reducers/authenticateReducer"

export const loguearse = (payload) => async dispatch => {
    try{
        const response = await iniciarSesion(payload)
        const usuarioLogueado = response.data
        if(usuarioLogueado){
            dispatch(authenticateActions.loguearse(usuarioLogueado))
        }
        else{
            
        }    
    }
    catch(error){
        throw Error(error)
    }
}

export const desloguearse = (payload) => async dispatch => {
    try{
        //const response = await cerrarSesion(payload)
        //const usuarioLogueado = response.data
        dispatch(authenticateActions.desloguearse())
    }
    catch(error){
        throw Error(error)
    }
}