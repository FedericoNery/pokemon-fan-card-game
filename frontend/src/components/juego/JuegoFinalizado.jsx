import { Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { sleep } from '../../utils/functions';

const JuegoFinalizado = ({ jugador1, jugador2, rondasGanadasJugador1, rondasGanadasJugador2 }) => {
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        await sleep(3000)
        setLoading(false)
    }, [])

    const nombreGanador = rondasGanadasJugador1 === 2 ? jugador1.nombre : jugador2.nombre
    const textoGanador = `El ganador fue ${nombreGanador}`
    return <>
        <Typography variant="h1">{loading ? <Skeleton /> : textoGanador}</Typography>
    </>
}

export default JuegoFinalizado;