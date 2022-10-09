import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useUsuario } from "../../hooks/useUsuario"
import { To } from '../../utils/routes';
import { SocketInit } from "../../core/socket/socket"
import { initListeners } from "../../core/socket/initListeners"
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { useRoomData } from '../../hooks/multiplayer/useRoomData';
import { EMIT_EVENTS, SUBSCRIPTIONS_EVENTS } from '../../core/socket/events_consts';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

/* export let socket = socketIoClient("http://localhost:8000", {
  reconnectionDelayMax: 10000,
  path: '/',
  transports: ['websocket'],
}); */
export let socket = io("http://localhost:8000").connect()

function SocketIOApp() {
  const [isConnected, setIsConnected] = React.useState(socket.connected);
  const [lastPong, setLastPong] = React.useState(null);

  React.useEffect(() => {
    socket.on(SUBSCRIPTIONS_EVENTS.CONNECT, () => {
      setIsConnected(true);
    });

    socket.on(SUBSCRIPTIONS_EVENTS.DISCONNECT, () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off(SUBSCRIPTIONS_EVENTS.CONNECT);
      socket.off(SUBSCRIPTIONS_EVENTS.DISCONNECT);
      socket.off('pong');
      socket.disconnect();
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }

  return (
    <div>
      <p>Connected: {'' + isConnected}</p>
      <p>Last pong: {lastPong || '-'}</p>
      <button onClick={sendPing}>Send ping</button>
    </div>
  );
}

const WaitingRoom = () => {
  const history = useHistory()
  const usuario = useUsuario()
  const { setGameId, setSocketId, setRoomsDisponibles } = useRoomData()
  useEffect(() => {
    const username = usuario.nombre_usuario;
    const roomId = "roomId"
    const password = "1234"
    debugger
    //socket = SocketInit(username, roomId, password);
    //initListeners(socket);

    socket.on(SUBSCRIPTIONS_EVENTS.CONNECT, () => {
      console.log("Conectado")
    });

    socket.on(SUBSCRIPTIONS_EVENTS.DISCONNECT, () => {
      console.log("Desconectaod")
    });

    socket.on(SUBSCRIPTIONS_EVENTS.CREATE_NEW_GAME, (data) => {
      debugger
      console.log(data)
      const { gameId, mySocketId } = data
      setGameId(gameId)
      setSocketId(mySocketId)
      history.push(To.esperandoQueSeConecteOtroJugador())
    });

    socket.on(SUBSCRIPTIONS_EVENTS.GET_ROOMS, ({ roomsConUnSoloJugador }) => {
      debugger
      setRoomsDisponibles(roomsConUnSoloJugador)
    });
    socket.on(SUBSCRIPTIONS_EVENTS.PLAYER_JOINED_ROOM, () => {
      history.push(To.juego_multiplayer())
    })

    /* return () => {
      debugger
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
      socket.disconnect();
    }; */
  }, [])



  const handleCreateRoom = data => {
    debugger
    socket.emit(EMIT_EVENTS.CREATE_NEW_GAME)
    //pasarle a initlisteners o guardar estados en redux 
  };

  return <Stack spacing={2}>
    <Item key="keyCreateRoom" onClick={handleCreateRoom}>Create Room</Item>
    <Item key="joinRoom" onClick={() => {
      debugger
      socket.emit(EMIT_EVENTS.GET_ROOMS)
      history.push(To.listadoDeRooms())
    }}>Join Room</Item>
    {/*  <SocketIOApp /> */}
  </Stack>
}

export default WaitingRoom;