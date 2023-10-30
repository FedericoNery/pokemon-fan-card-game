import { useSelector } from "react-redux"

export const usePartidasPerdidas = () => {
    const authenticateReducer = useSelector(state => state.authenticateReducer)
    return authenticateReducer?.usuario?.partidas_perdidas
}