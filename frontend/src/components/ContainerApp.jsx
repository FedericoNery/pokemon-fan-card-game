import { makeStyles } from "@mui/styles";
import React from "react";
import ToastContainer from "./ui/toasts/ToastContainer";

const ContainerApp = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.primary.main,
        }
    }));

    const classes = useStyles();

    return <div className={classes.root}>
        <ToastContainer>
            {props.children}
        </ToastContainer>
    </div>
}

export default ContainerApp;