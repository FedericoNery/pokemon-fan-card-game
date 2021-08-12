import { useSelector } from "react-redux"

export const useListaMazosDelUsuario = () => {
    const authenticateReducer = useSelector(state => state.authenticateReducer)
    return authenticateReducer?.usuario?.mazos
}