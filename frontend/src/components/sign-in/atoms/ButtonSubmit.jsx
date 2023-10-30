import { Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ButtonSubmit = () => {
    const classes = useStyles();

    return <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        classes={classes.submit}
        className={classes.submit}
    //onClick={() => history.push(To.menuPrincipal())}
    >
        Sign In
    </Button>
}

export default ButtonSubmit;

/*
<Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        //onClick={() => history.push(To.menuPrincipal())}
                        >
                            Sign In
                        </Button>
*/