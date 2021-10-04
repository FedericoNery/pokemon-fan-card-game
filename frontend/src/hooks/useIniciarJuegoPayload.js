import { useSelector } from "react-redux"

export const useIniciarJuegoPayload = () => {
    const authenticateReducer = useSelector(state => state.authenticateReducer)
    const juegoReducer = useSelector(state => state.juegoReducer)
    const idMazo = juegoReducer?.mazoSeleccionadoUsuario
    const idJugador = authenticateReducer?.usuario?.numero
    return {
        "idJugadorLogueado": idJugador,
        "idMazoSeleccionado": idMazo
    }
}