import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { useJuego } from '../../hooks/useJuego'
import { useIniciarJuegoPayload } from '../../hooks/useIniciarJuegoPayload'
import { iniciarJuego, invocarCartasJugador } from '../../redux/actionCreators/juego'
import Juego from './Juego'
import { useCartasSeleccionadas } from '../../hooks/useCartasSeleccionadas'


const ContainerJuego = ({ iniciarJuego, invocarCartasJugador }) => {
    const [isLoading, setIsLoading] = useState(true)
    const payload = useIniciarJuegoPayload()

    useEffect(async () => {
        debugger
        setIsLoading(true)
        await iniciarJuego(payload)
        setIsLoading(false)
    }, [])

    const juego = useJuego()
    const cartasSeleccionadas = useCartasSeleccionadas()
    const props = { invocarCartasJugador, juego, cartasSeleccionadas }

    return isLoading ? <></> : <Juego {...props} />
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { iniciarJuego, invocarCartasJugador }, dispatch
    )
}

export default compose(
    connect(null, mapDispatchToProps)
)(ContainerJuego)