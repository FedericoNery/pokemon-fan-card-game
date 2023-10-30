import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        width: 40,
        height: 40
    },
}));

const AvatarSignIn = () => {
    const classes = useStyles();
    return <Avatar className={classes.avatar}>
        <img src="../images/pokeball.png" alt="pokeball" className={classes.avatar}/>
    </Avatar>
}

export default AvatarSignIn;