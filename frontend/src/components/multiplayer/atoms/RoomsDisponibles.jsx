import { Button, Grid, Typography } from "@mui/material"
import React from "react"
import { getCartasDelMazoById } from "../../../core/services/mazos"
import { EMIT_EVENTS } from "../../../core/socket/events_consts"
import { socket } from "../WaitingRoom"

const RoomsDisponibles = ({ roomsDisponibles, numeroMazoSeleccionado, usuario }) => {
    return roomsDisponibles.map((value, index) => {
        return <React.Fragment key={`kdiv${index}`}>
            <Grid item xs={12}>
                <Typography variant="caption" gutterBottom>Game Id:{value}</Typography>
                <Button variant="contained" sx={{marginLeft: 5}}
                onClick={async () => {
                    //setear el gameId acá
                    const res = await getCartasDelMazoById(numeroMazoSeleccionado)
                    const mazo = res.data
                    socket.emit(EMIT_EVENTS.PLAYER_JOIN_GAME, { gameIdToJoin: value, usuario, mazo })
                    //history.push(To.juego_multiplayer())
                }}>Unirse al juego: {value}</Button>
            </Grid>
        </React.Fragment>
    })
}

export default RoomsDisponibles;



