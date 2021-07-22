import { iniciarSesion } from "../../core/services/authentication"
import { authenticateActions } from "../reducers/authenticateReducer"

export const loguearse = (payload) => async dispatch => {
    try{
        debugger
        const response = await iniciarSesion(payload)
        const usuarioLogueado = response.data
        if(usuarioLogueado){
            dispatch(authenticateActions.loguearse(usuarioLogueado))
        }
        else{
            
        }    
    }
    catch(error){
        console.log(error)
    }
}