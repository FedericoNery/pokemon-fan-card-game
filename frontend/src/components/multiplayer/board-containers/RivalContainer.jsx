import { Container } from "@mui/material";

const RivalContainer = ({ ...props }) => {
    return <div style={{ paddingTop: 20, "height": "50vh" }}>
        <Container maxWidth="xl">
            {props.children}
        </Container>
    </div>
}

export default RivalContainer;
