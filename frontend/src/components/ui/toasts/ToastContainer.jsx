import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import React, { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ContextToastContainer = React.createContext(null);

const ToastContainer = (props) => {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")
    const [variant, setVariant] = useState("")

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    const handleOpen = () => setOpen(true)

    function warning(message) {
        setMessage(message)
        setVariant("warning")
        handleOpen()
    }

    function success(message) {
        setMessage(message)
        setVariant("success")
        handleOpen()
    }

    function error(message) {
        setMessage(message)
        setVariant("error")
        handleOpen()
    }

    function info(message) {
        setMessage(message)
        setVariant("info")
        handleOpen()
    }

    /* const funcionesToast = useMemo(
        (message) => ({
            warning: () => warning(message),
            success: () => success(message),
            error: () => error(message),
            info: () => info(message) })
        ,[]) */

    const funcionesToast = {
        warning,
        success,
        error,
        info
    }


    return <ContextToastContainer.Provider value={funcionesToast}>
        {props.children}
        <React.Fragment>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </React.Fragment>
    </ContextToastContainer.Provider>
}

export default ToastContainer;
