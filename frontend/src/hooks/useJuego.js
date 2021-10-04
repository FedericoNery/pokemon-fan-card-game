import { useSelector } from "react-redux"

export const useJuego = () => {
    const juegoReducer = useSelector(state => state.juegoReducer)
    return juegoReducer?.juego
}