import { Button, Container, Input } from "@mui/material";
import { useState } from "react";
import { useUsuario } from "../../hooks/useUsuario"
import { To } from '../../utils/routes';
import { SocketInit } from "../../core/socket/socket"
import { initListeners } from "../../core/socket/initListeners"
import { useHistory } from 'react-router-dom';
import React from "react";
import { socket } from "./WaitingRoom";


const CreateRoom = () => {
  const [roomIdValue, setRoomId] = useState(null)
  const [passwordValue, setPassword] = useState(null)
  const usuario = useUsuario()
  const history = useHistory()

  const handleCreateRoom = data => {
    const { username } = usuario.nombre_usuario;

    socket = SocketInit(username, roomIdValue, passwordValue);
    initListeners(socket);
    //pasarle a initlisteners o guardar estados en redux
    history.push(To.esperandoQueSeConecteOtroJugador())
  };

  return <React.Fragment>
    <Container fixed>
      <Input placeholder="Room Id" onChange={(e) => setRoomId(e.target.value)} value={roomIdValue} />
      <Input placeholder="Password Room" onChange={(e) => setPassword(e.target.value)} value={passwordValue} />
      <Button onClick={handleCreateRoom} />
    </Container>
  </React.Fragment>
}

export default CreateRoom;
