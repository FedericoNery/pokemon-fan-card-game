import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useUsuario } from "../../hooks/useUsuario"
import { To } from '../../utils/routes';
import {SocketInit} from "../../core/socket/socket"
import {initListeners} from "../../core/socket/initListeners"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export let socket = undefined;

const WaitingRoom = () => {
  const history = useHistory()
  const usuario = useUsuario()

  const handleCreateRoom = data => {
    const { username } = usuario.nombre_usuario;
    //const { action } = this.state;
    const { roomId, password, options } = data;

    socket = SocketInit(username, roomId, password, options);
    initListeners(socket);
    //pasarle a initlisteners o guardar estados en redux 
    history.push(To.esperandoQueSeConecteOtroJugador())
  };

  return <Stack spacing={2}>
    <Item key="keyCreateRoom" onClick={handleCreateRoom}>Create Room</Item>
    <Item key="joinRoom" onClick={() => history.push(To.listadoDeRooms())}>Join Room</Item>
  </Stack>
}

export default WaitingRoom;