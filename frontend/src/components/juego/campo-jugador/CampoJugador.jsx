import React from 'react'

const CampoJugador = () => {
    return <BoxCartas>
    {!btnInvocacionFueClickeado && <CartasSeleccionarJugador cartas={mano.cartas}/>}
    {(btnInvocacionFueClickeado && !btnBatallarFueClickeado) && <CartasSeleccionarJugador cartas={zonaJuego.cartas}/>}
</BoxCartas>
<ContadoresDeEnergias cantidadesEnergias={cantidadesEnergias} />
}

export default CampoJugador;