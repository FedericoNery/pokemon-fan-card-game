import { useSelector } from "react-redux"

export const useMazoSeleccionado = () => {
    const numeroMazo = useSelector(state => state.juegoReducer.mazoSeleccionadoUsuario)
    return numeroMazo
}