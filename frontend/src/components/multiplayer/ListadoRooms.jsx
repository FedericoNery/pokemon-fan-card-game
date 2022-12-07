import { Button, Container, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCartasDelMazoById } from "../../core/services/mazos";
import { EMIT_EVENTS, SUBSCRIPTIONS_EVENTS } from "../../core/socket/events_consts";
import { useRoomData } from "../../hooks/multiplayer/useRoomData";
import { useJuego } from "../../hooks/useJuego";
import { useMazoSeleccionado } from "../../hooks/useMazoSeleccionado";
import { useUsuario } from "../../hooks/useUsuario";
import { To } from "../../utils/routes";
import { isJugadorUno } from "./isJugadorUno";
import { mapJuegoToFront } from "./mapJuegoToFront";
import { socket } from "./WaitingRoom";

const ListadoRooms = () => {
  const { roomsDisponibles } = useRoomData()
  const history = useHistory()
  const usuario = useUsuario()
  const numeroMazoSeleccionado = useMazoSeleccionado()

  const { setGameId, setSocketId, setRoomsDisponibles } = useRoomData()
  const { setJuego } = useJuego()

  useEffect(() => {
    socket.on(SUBSCRIPTIONS_EVENTS.START_GAME, ({ gameId, socketId, gameData }) => {
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)

      history.push(To.juego_multiplayer())
    })
  }, [])


  return <Container fixed>
    {
      roomsDisponibles.length > 0 ?
        roomsDisponibles.map((value, index) => {
          return <Paper variant="outlined" key={`kdiv${index}`}>
            <Typography variant="caption" gutterBottom>Game Id:{value}</Typography>
            <Button variant="contained" onClick={async () => {
              //setear el gameId acá
              const res = await getCartasDelMazoById(numeroMazoSeleccionado)
              const mazo = res.data
              socket.emit(EMIT_EVENTS.PLAYER_JOIN_GAME, { gameIdToJoin: value, usuario, mazo })
              //history.push(To.juego_multiplayer())
            }}>Unirse al juego: {value}</Button>
          </Paper>
        }) : <Typography variant="h3" gutterBottom align="center" sx={{marginTop: 10}}>
          No hay salas disponibles
        </Typography>
    }
  </Container>
}

export default ListadoRooms;
