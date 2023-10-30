import { useSelector } from "react-redux"

export const useCartasEnTiendaFiltradas = () => {
    const juegoReducer = useSelector(state => state.tiendaReducer)
    return juegoReducer?.cartasFiltradas
}