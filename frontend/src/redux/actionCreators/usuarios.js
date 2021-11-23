import { crearUsuario as postCrearUsuario } from "../../core/services/usuarios"

export const crearUsuario = (payload) => async dispatch => {
    try{
        await postCrearUsuario(payload)
    }
    catch(error){
        console.log(error)
    }
}