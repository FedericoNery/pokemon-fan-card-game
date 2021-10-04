import { empezarJuego, invocarCartas } from "../../core/services/juego"
import { juegoActions } from "../reducers/juegoReducer"

export const guardarMazoSeleccionado = (payload) => async dispatch => {
    dispatch(juegoActions.guardarMazoSeleccionado(payload))
}


export const iniciarJuego = (payload) => async dispatch => {
    try {
        debugger
        const response = await empezarJuego(payload)
        const juego = response.data
        dispatch(juegoActions.iniciarJuego(juego))
    }
    catch (error) {
        console.log(error)
    }
}

export const invocarCartasJugador = (payload) => async dispatch => {
    try {
        debugger
        const response = await invocarCartas(payload)
        const juego = response.data
        dispatch(juegoActions.invocarCartas(juego))
    }
    catch (error) {
        console.log(error)
    }
}