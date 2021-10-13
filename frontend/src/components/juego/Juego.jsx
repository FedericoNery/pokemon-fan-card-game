import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import CartaParaSeleccionar from '../cartas/CartaParaSeleccionar';
import ContadoresDeEnergias from '../ContadoresDeEnergias';
import { invocarCartasJugador, iniciarBatalla } from '../../redux/actionCreators/juego'
import CartasOcultasRival from './CartasOcultasRival';
import CartasSeleccionarJugador from './CartasSeleccionarJugador';
import BoxCartas from './BoxCartas';
import ContadorRondasGanadas from './ContadorRondasGanadas';
import InformacionJugador from './InformacionJugador';
import JuegoFinalizado from './JuegoFinalizado'
import { sleep } from '../../utils/functions';

const Juego = ({ juego, invocarCartasJugador, cartasSeleccionadas, iniciarBatalla }) => {

    const { campo1, campo2, rondasGanadasJugador1, rondasGanadasJugador2, jugador1, jugador2, estadoDeLaRonda } = juego
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
    const onIniciarBatalla = async () => {
        setBtnBatallatFueClickeado(true)
        setBtnInvocacionFueClickeado(false)
        iniciarBatalla()
        await sleep(2000)
        setBtnBatallatFueClickeado(false)
    }

    return <>
        {
            estadoDeLaRonda === 7 ? <JuegoFinalizado jugador1={jugador1} jugador2={jugador2} rondasGanadasJugador1={rondasGanadasJugador1} rondasGanadasJugador2={rondasGanadasJugador2} />
                : <>
                    <ContadoresDeEnergias cantidadesEnergias={cantidadesEnergiasEnemigo} />
                    <ContadorRondasGanadas cantidad={rondasGanadasJugador2} />
                    <InformacionJugador nombre={jugador2.nombre_usuario} />
                    <BoxCartas>
                        {!btnInvocacionFueClickeado && <CartasOcultasRival />}
                        {(btnInvocacionFueClickeado && !btnBatallarFueClickeado) && zonaJuegoCampo2.cartas.map((carta, index) =>
                            <Box p={1} m={1}>
                                <CartaParaSeleccionar carta={carta} /> {/* Debería ser no seleccionable */}
                            </Box>
                        )
                        }
                    </BoxCartas>
                    {!btnInvocacionFueClickeado && <Button onClick={onInvocarCartasJugador}>Invocar</Button>}
                    {(btnInvocacionFueClickeado && !btnBatallarFueClickeado) && <Button onClick={onIniciarBatalla}>Batallar</Button>}
                    <BoxCartas>
                        {!btnInvocacionFueClickeado && <CartasSeleccionarJugador cartas={mano.cartas} />}
                        {(btnInvocacionFueClickeado && !btnBatallarFueClickeado) && <CartasSeleccionarJugador cartas={zonaJuego.cartas} />}
                    </BoxCartas>
                    <InformacionJugador nombre={jugador1.nombre_usuario} />
                    <ContadorRondasGanadas cantidad={rondasGanadasJugador1} />
                    <ContadoresDeEnergias cantidadesEnergias={cantidadesEnergias} />
                </>
        }
    </>
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { invocarCartasJugador, iniciarBatalla }, dispatch
    )
}

export default compose(
    connect(null, mapDispatchToProps)
)(Juego)
