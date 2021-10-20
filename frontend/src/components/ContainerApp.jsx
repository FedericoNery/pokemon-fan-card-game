import { makeStyles } from "@mui/styles";
import React from "react";

const ContainerApp = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.primary.main,
        }
    }));

    const classes = useStyles();

    return <div className={classes.root}>
        {props.children}
    </div>
}

export default ContainerApp;