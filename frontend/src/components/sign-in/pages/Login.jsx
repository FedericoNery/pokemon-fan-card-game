import { CssBaseline, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import login_background from "../../../images/login_background.png";
import ButtonToggleMode from '../atoms/ButtonToggleMode';
import SignInAvatar from '../molecules/SignInAvatar';
import ContainerLoginForm from '../organisms/ContainerLoginForm';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${login_background})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = (props) => {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Grid container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center">
                    <ButtonToggleMode />
                </Grid>
                <Grid item>
                    <div className={classes.paper}>
                        <SignInAvatar />
                        <ContainerLoginForm />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Login