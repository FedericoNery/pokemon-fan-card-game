import { useState } from "react"

export const useCartaParaSeleccionar = (quitarCartaSeleccionada, agregarCartaSeleccionada) => {
    const [isSeleccionada, setIsSeleccionada] = useState(false)

    const onSeleccionarCarta = (numeroCarta) => {
        if(isSeleccionada){
            setIsSeleccionada(false)
            quitarCartaSeleccionada(numeroCarta)
        }
        else{
            setIsSeleccionada(true)
            agregarCartaSeleccionada(numeroCarta)
        }
    }

    return {isSeleccionada, setIsSeleccionada, onSeleccionarCarta}
}

