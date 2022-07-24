import { useSelector } from "react-redux"

export const useFiltroCartasEnTienda = () => {
    const juegoReducer = useSelector(state => state.tiendaReducer)
    return juegoReducer?.filtro
}