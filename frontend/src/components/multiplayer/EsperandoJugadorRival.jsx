import { Box, CircularProgress, Container, Stack, Typography } from "@mui/material";
import { useRoomData } from "../../hooks/multiplayer/useRoomData";

const EsperandoJugadorRival = () => {
    const roomData = useRoomData()
    const { socketId, gameId } = roomData
    return <Container fixed>
        <Stack spacing={2} justifyContent="center">
            <Typography variant="h3" display="block" gutterBottom align="center" sx={{ marginTop: 10 }}>
                Esperando que se una otro jugador
            </Typography>
            <Typography variant="overline" gutterBottom align="center">
                Socket Id: {socketId}
            </Typography>
            <Typography variant="overline" gutterBottom align="center">
                Game Id: {gameId}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        </Stack>
    </Container>
}

export default EsperandoJugadorRival;
