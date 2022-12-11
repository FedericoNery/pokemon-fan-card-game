import { Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { SUBSCRIPTIONS_EVENTS } from "../../core/socket/events_consts";
import { useRoomData } from "../../hooks/multiplayer/useRoomData";
import { useJuego } from "../../hooks/useJuego";
import { useMazoSeleccionado } from "../../hooks/useMazoSeleccionado";
import { useUsuario } from "../../hooks/useUsuario";
import { To } from "../../utils/routes";
import RoomsDisponibles from "./atoms/RoomsDisponibles";
import { isJugadorUno } from "./isJugadorUno";
import { mapJuegoToFront } from "./mapJuegoToFront";
import { socket } from "./WaitingRoom";

const ListadoRooms = () => {
  const { roomsDisponibles } = useRoomData()
  const history = useHistory()
  const usuario = useUsuario()
  const numeroMazoSeleccionado = useMazoSeleccionado()

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
    <div sx={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ marginTop: 10 }}>
        Listado de salas
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {
          roomsDisponibles.length > 0 ? <RoomsDisponibles roomsDisponibles={roomsDisponibles}
            numeroMazoSeleccionado={numeroMazoSeleccionado}
            usuario={usuario}
          />
            : <Typography variant="h3" gutterBottom align="center" sx={{ marginTop: 10, }}>
              No hay salas disponibles
            </Typography>
        }
      </Grid>
    </div>

  </Container >
}

export default ListadoRooms;
