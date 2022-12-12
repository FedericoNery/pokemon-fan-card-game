import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import EmailInput from '../atoms/EmailInput';
import FirstNameInput from '../atoms/FirstNameInput';
import LastNameInput from '../atoms/LastNameInput';
import PasswordInput from '../atoms/PasswordInput';
import SignIn from '../atoms/SignIn';
import UsernameInput from '../atoms/UsernameInput';
import ButtonSignUp from '../atoms/ButtonSignUp'
import { crearUsuario } from '../../../core/services/usuarios'; //Ver de mover esto al action creator
import { useHistory } from 'react-router';
import { ContextToastContainer } from '../../ui/toasts/ToastContainer';

const ContainerSignUpForm = (props) => {
    const history = useHistory()
    const toast = useContext(ContextToastContainer)

    const onSignUp = async (event) => {
        event.preventDefault();
        const payload = {
            email: event.target.email.value,
            password: event.target.password.value,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            username: event.target.username.value
        }
        try {
            await crearUsuario(payload)
            toast.success("Se creó el usuario con éxito")
            history.push("/")
        }
        catch (error) {
            toast.error(error.toString())
        }
    }

    return <Box component="form" noValidate onSubmit={onSignUp} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <UsernameInput />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FirstNameInput />
            </Grid>
            <Grid item xs={12} sm={6}>
                <LastNameInput />
            </Grid>
            <Grid item xs={12}>
                <EmailInput />
            </Grid>
            <Grid item xs={12}>
                <PasswordInput />
            </Grid>
        </Grid>
        <ButtonSignUp />
        <Grid container justifyContent="flex-end">
            <Grid item>
                <SignIn />
            </Grid>
        </Grid>
    </Box>
}

export default ContainerSignUpForm;
