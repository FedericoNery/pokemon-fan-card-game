import { useSelector } from "react-redux"

export const usePartidasGanadas = () => {
    const authenticateReducer = useSelector(state => state.authenticateReducer)
    return authenticateReducer?.usuario?.partidas_ganadas
}