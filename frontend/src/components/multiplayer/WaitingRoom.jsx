import { Button, Container, Divider, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import { getCartasDelMazoById } from '../../core/services/mazos';
import { EMIT_EVENTS, SUBSCRIPTIONS_EVENTS } from '../../core/socket/events_consts';
import { useRoomData } from '../../hooks/multiplayer/useRoomData';
import { useJuego } from '../../hooks/useJuego';
import { useMazoSeleccionado } from '../../hooks/useMazoSeleccionado';
import { useUsuario } from "../../hooks/useUsuario";
import { To } from '../../utils/routes';
import { isJugadorUno } from './isJugadorUno';
import { mapJuegoToFront } from './mapJuegoToFront';

export let socket = io("http://localhost:8000").connect()

const WaitingRoom = () => {
  const history = useHistory()
  const usuario = useUsuario()
  const numeroMazoSeleccionado = useMazoSeleccionado()
  const { enqueueSnackbar } = useSnackbar()
  const { setGameId, setSocketId, setRoomsDisponibles } = useRoomData()
  const { setJuego } = useJuego()

  useEffect(() => {

    socket.on(SUBSCRIPTIONS_EVENTS.NEW_GAME_CREATED, (data) => {
      const { gameId, mySocketId } = data
      setGameId(gameId)
      setSocketId(mySocketId)
      history.push(To.esperandoQueSeConecteOtroJugador())
    });

    socket.on(SUBSCRIPTIONS_EVENTS.RECEIVED_ROOMS, ({ roomsConUnSoloJugador }) => {
      setRoomsDisponibles(roomsConUnSoloJugador)
    });
    socket.on(SUBSCRIPTIONS_EVENTS.PLAYER_JOINED_ROOM, ({ gameId, socketId }) => {
      history.push(To.juego_multiplayer())
    })
    socket.on(SUBSCRIPTIONS_EVENTS.START_GAME, ({ gameId, socketId, gameData }) => {
      setGameId(gameData.game_id)
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)
      enqueueSnackbar("Arrancó la partida", { variant: "info", autoHideDuration: 3000 })
      enqueueSnackbar("Arrancó la fase de invocación", { variant: "info", autoHideDuration: 4000 });
      history.push(To.juego_multiplayer())
    })
  }, [])



  const handleCreateRoom = async () => {
    const res = await getCartasDelMazoById(numeroMazoSeleccionado)
    socket.emit(EMIT_EVENTS.CREATE_NEW_GAME, { usuario, mazo: res.data })
  };

  return <Container fixed sx={{ marginTop: 10 }}>
    <Typography variant="h3" gutterBottom align='center'>
      Creando partida
    </Typography>
    <Stack spacing={2} direction="row"
      alignItems="center"
      justifyContent="center"
      divider={<Divider orientation="vertical" flexItem />}>
      <Button variant="contained" sx={{ width: 200, height: 100 }} onClick={handleCreateRoom}>Crear sala</Button>
      <Button variant="contained" sx={{ width: 200, height: 100 }} onClick={() => {
        socket.emit(EMIT_EVENTS.GET_ROOMS)
        history.push(To.listadoDeRooms())
      }}>Unirse a la sala</Button>
    </Stack>
  </Container>
}

export default WaitingRoom;
