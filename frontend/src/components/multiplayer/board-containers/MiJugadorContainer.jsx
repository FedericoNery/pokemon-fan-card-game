import { Container } from "@mui/system";

const MiJugador = ({ ...props }) => {
    return <div style={{ "margin": "2px", "paddingTop": "20px", "height": "40vh" }}>
        <Container maxWidth="xl">
            {props.children}
        </Container>
    </div>
}

export default MiJugador;
