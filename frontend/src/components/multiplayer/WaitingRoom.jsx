import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export let socket = io("http://localhost:8000").connect()

const WaitingRoom = () => {
  const history = useHistory()
  const usuario = useUsuario()
  const numeroMazoSeleccionado = useMazoSeleccionado()

  const { setGameId, setSocketId, setRoomsDisponibles } = useRoomData()
  const { setJuego } = useJuego()

  useEffect(() => {
    socket.on(SUBSCRIPTIONS_EVENTS.CONNECT, () => {
    });

    socket.on(SUBSCRIPTIONS_EVENTS.DISCONNECT, () => {
    });

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

      history.push(To.juego_multiplayer())
    })
  }, [])



  const handleCreateRoom = async () => {
    const res = await getCartasDelMazoById(numeroMazoSeleccionado)
    socket.emit(EMIT_EVENTS.CREATE_NEW_GAME, { usuario, mazo: res.data })
  };

  return <Stack spacing={2}>
    <Item key="keyCreateRoom" onClick={handleCreateRoom}>Create Room</Item>
    <Item key="joinRoom" onClick={() => {
      socket.emit(EMIT_EVENTS.GET_ROOMS)
      history.push(To.listadoDeRooms())
    }}>Join Room</Item>
  </Stack>
}

export default WaitingRoom;
