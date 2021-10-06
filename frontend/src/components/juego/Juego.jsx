import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import CartaOculta from '../cartas/CartaOculta';
import CartaParaSeleccionar from '../cartas/CartaParaSeleccionar';
import ContadoresDeEnergias from '../ContadoresDeEnergias';
import { invocarCartasJugador } from '../../redux/actionCreators/juego'

const Juego = ({ juego, invocarCartasJugador, cartasSeleccionadas }) => {

    const { campo1, campo2 } = juego
    const { mano, cantidadesEnergias, zonaJuego } = campo1
    const { cantidadesEnergias: cantidadesEnergiasEnemigo, zonaJuego: zonaJuegoCampo2 } = campo2
    const [btnInvocacionFueClickeado, setBtnInvocacionFueClickeado] = useState(false)
    const [btnBatallarFueClickeado, setBtnBatallatFueClickeado] = useState(false)

    const onInvocarCartasJugador = () => {
        //Ya selecciono todo y envía el request para invocar
        setBtnInvocacionFueClickeado(true)
        const payload = { cartas: cartasSeleccionadas, idJugador: juego.jugador1.numero }
        invocarCartasJugador(payload)
    }
    const onIniciarBatalla = () => {
        setBtnBatallatFueClickeado(true)
        setBtnInvocacionFueClickeado(false)
    }

    return <>
        <ContadoresDeEnergias cantidadesEnergias={cantidadesEnergiasEnemigo} />
        <Box display="flex" flexWrap="nowrap" p={1} m={1} justifyContent="center" alignItems="flex-start" css={{
            maxWidth: "100%", height: "50%", margin: "0px",
            padding: "0px",
        }}>
            {!btnInvocacionFueClickeado && <>
                <Box p={1} m={1}>
                    <CartaOculta />
                </Box >
                <Box p={1} m={1}>
                    <CartaOculta />
                </Box>
                <Box p={1} m={1}>
                    <CartaOculta />
                </Box>
                <Box p={1} m={1}>
                    <CartaOculta />
                </Box>
                <Box p={1} m={1}>
                    <CartaOculta />
                </Box>
                <Box p={1} m={1}>
                    <CartaOculta />
                </Box>
            </>
            }
            {(btnInvocacionFueClickeado && !btnBatallarFueClickeado) && zonaJuegoCampo2.cartas.map((carta, index) =>
                    <Box p={1} m={1}>
                        <CartaParaSeleccionar carta={carta} /> {/* Debería ser no seleccionable */}
                    </Box>
                )
            }
        </Box>
        {!btnInvocacionFueClickeado && <Button onClick={onInvocarCartasJugador}>Invocar</Button>}
        {(btnInvocacionFueClickeado && !btnBatallarFueClickeado) && <Button onClick={onIniciarBatalla}>Batallar</Button>}
        <Box display="flex" p={1} m={1} flexWrap="nowrap" justifyContent="center" alignItems="flex-end" sx={{
            maxWidth: "100%", height: "50%", margin: "0px",
            padding: "0px",
        }}>
            {!btnInvocacionFueClickeado && mano.cartas.map((carta, index) =>
                <Box p={1} m={1}>
                    <CartaParaSeleccionar carta={carta} />
                </Box>
            )}
            {
                (btnInvocacionFueClickeado && !btnBatallarFueClickeado) && zonaJuego.cartas.map((carta, index) =>
                    <Box p={1} m={1}>
                        <CartaParaSeleccionar carta={carta} />
                    </Box>
                )
            }
        </Box>
        <ContadoresDeEnergias cantidadesEnergias={cantidadesEnergias} />

    </>
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { invocarCartasJugador }, dispatch
    )
}

export default compose(
    connect(null, mapDispatchToProps)
)(Juego)
