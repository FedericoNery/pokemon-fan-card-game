import { useTheme } from "@emotion/react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { ColorModeContext } from "../../../App";

const ButtonToggleMode = () => {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    return <Tooltip title={theme.palette.mode === 'dark' ? "Sun theme" : "Moon theme"}>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ?
                <Brightness4 /> :
                <Brightness7 />}
        </IconButton>
    </Tooltip>
}

export default ButtonToggleMode;