import { MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ButtonDrawer = ({ toggleDrawer, open }) => {
    return <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="start"
        sx={{
            marginRight: '40px',
            ...(open && { display: 'none' }),
        }}
    >
        <MenuOutlined />
    </IconButton>
}

export default ButtonDrawer;
