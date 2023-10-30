import { useTheme } from "@emotion/react";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { ColorModeContext } from "../../../App";

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: 'transparent !important',
        background: 'transparent !important'
    },
    avatar: {
        margin: theme.spacing(1),
        width: 40,
        height: 40
    },
    img: {
        width: 40,
        height: 40,
    }
}));

const ButtonToggleMode = () => {
    const classes = useStyles();
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    return <Tooltip title={theme.palette.mode === 'dark' ? "Sun theme" : "Moon theme"}>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ?
                <Avatar classes={{root: classes.root}} className={classes.avatar}><img className={classes.img} src="../images/sun.png" alt="sun" /></Avatar> :
                <Avatar  classes={{root: classes.root}}  className={classes.avatar}><img className={classes.img} src="../images/moon.png" alt="moon" /></Avatar>}
        </IconButton>
    </Tooltip>
}

export default ButtonToggleMode;