import { Container, Typography } from "@mui/material";
import ListadoUsuarios from "./ListadoUsuarios";

const ContainerUsuarios = () => {
    return <Container fixed>
        <Typography variant="h3" gutterBottom align='center' sx={{ marginTop: 5 }}>
            Listado de Usuarios
        </Typography>
        <div style={{ display: 'flex', height: '80vh' }}>
            <ListadoUsuarios />
        </div>
    </Container>
}

export default ContainerUsuarios;
