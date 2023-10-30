import { useSelector } from "react-redux"

export const useUsuario = () => {
    const authenticateReducer = useSelector(state => state.authenticateReducer)
    return authenticateReducer?.usuario
}