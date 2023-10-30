import { useSelector } from "react-redux"

export const useRolUsuario = () => {
    const authenticateReducer = useSelector(state => state.authenticateReducer)
    return authenticateReducer?.usuario?.rol_usuario
}