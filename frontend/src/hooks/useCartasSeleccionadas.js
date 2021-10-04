import { useSelector } from "react-redux"

export const useCartasSeleccionadas = () => {
    const juegoReducer = useSelector(state => state.juegoReducer)
    return juegoReducer?.cartasSeleccionadas
}