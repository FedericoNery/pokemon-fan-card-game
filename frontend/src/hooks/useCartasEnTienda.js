import { useSelector } from "react-redux"

export const useCartasEnTienda = () => {
    const juegoReducer = useSelector(state => state.tiendaReducer)
    return juegoReducer?.cartas
}