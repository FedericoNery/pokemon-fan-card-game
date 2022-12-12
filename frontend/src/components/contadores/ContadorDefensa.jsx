import { Badge, Icon } from "@mui/material";

const ContadorDefensa = ({ cantidad }) => {
    return <Badge badgeContent={cantidad} color="secondary" max={999} >
        <Icon sx={{ width: 64, height: 64 }}>
            <img src="/images/shield.png" height={64} width={64} alt="Defensa icon" />
        </Icon >
    </Badge>
}

export default ContadorDefensa;
