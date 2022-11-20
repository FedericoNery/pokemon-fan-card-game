import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { juegoActions } from "../redux/reducers/juegoReducer"

export const useJuego = () => {
  const juegoReducer = useSelector(state => state.juegoReducer)

  const dispatch = useDispatch()
  const setJuego = useCallback((value) => dispatch(juegoActions.setJuego(value)), [])

  return { juego: juegoReducer?.juego, setJuego }
}
