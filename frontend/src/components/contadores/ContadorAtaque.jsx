import { Badge, Icon } from "@mui/material";

const ContadorAtaque = ({ cantidad }) => {
    return <Badge badgeContent={cantidad} color="secondary" max={999} >
        <Icon sx={{ width: 64, height: 64 }}>
            <img src="/images/sword.png" height={64} width={64} alt="Ataque icon" />
        </Icon >
    </Badge>
}

export default ContadorAtaque;
