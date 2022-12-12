import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tiendaActions } from "../redux/reducers/tiendaReducer"

export const useTiendaCartasEdition = () => {
    const tiendaReducer = useSelector(state => state.tiendaReducer)
    const dispatch = useDispatch()
    const changeEstadoCartaEnOferta = useCallback((payload) => dispatch(tiendaActions.changeEstadoCartaEnOferta(payload)), [])
    const changeEstadoCartaDisponible = useCallback((payload) => dispatch(tiendaActions.changeEstadoCartaDisponible(payload)), [])
    const changePrecioCarta = useCallback((payload) => dispatch(tiendaActions.changePrecioCarta(payload)), [])

    return {changeEstadoCartaEnOferta, changeEstadoCartaDisponible, changePrecioCarta }
}
