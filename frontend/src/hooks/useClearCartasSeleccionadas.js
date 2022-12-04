//

import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { juegoActions } from "../redux/reducers/juegoReducer"

export const useClearCartasSeleccionadas = () => {

  const dispatch = useDispatch()
  const clearCartasSeleccionadas = useCallback((value) => dispatch(juegoActions.clearCartasSeleccionadas()), [])

  return { clearCartasSeleccionadas }
}
