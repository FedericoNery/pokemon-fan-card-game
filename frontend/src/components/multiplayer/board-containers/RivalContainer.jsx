import { Container } from "@mui/material";

const RivalContainer = ({ ...props }) => {
    return <div style={{ "margin": "2px", "height": "50vh" }}>
        <Container maxWidth="xl">
            {props.children}
        </Container>
    </div>
}

export default RivalContainer;
