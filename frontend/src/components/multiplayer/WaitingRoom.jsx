import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import { To } from '../../utils/routes';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const WaitingRoom = () => {
    const history = useHistory()

    return <Stack spacing={2}>
    <Item onClick={history.push(To.esperandoQueSeConecteOtroJugador())}>Create Room</Item>
    <Item onClick={history.push(To.listadoDeRooms())}>Join Room</Item>
  </Stack>
}
 
export default WaitingRoom;