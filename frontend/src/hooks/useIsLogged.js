import { useSelector } from "react-redux"

export const useIsLogged = () => {
    const authenticateReducer = useSelector(state => state.authenticateReducer)
    debugger
    return authenticateReducer?.estaLogueado
}