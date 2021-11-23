import { useSelector } from "react-redux"

export const useNumeroUsuario = () => {
    const authenticateReducer = useSelector(state => state.authenticateReducer)
    return authenticateReducer?.usuario?.numero
}