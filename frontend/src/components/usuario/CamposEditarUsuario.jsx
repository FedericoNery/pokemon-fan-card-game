import { Grid } from "@mui/material";
import React from "react";
import ButtonEditUsuario from "./atoms/ButtonEditUsuario";
import ConfirmPasswordInput from "./atoms/ConfirmPasswordInput";
import EmailInput from "./atoms/EmailInput";
import FirstNameInput from "./atoms/FirstNameInput";
import LastNameInput from "./atoms/LastNameInput";
import PasswordInput from "./atoms/PasswordInput";
import UsernameInput from "./atoms/UsernameInput";

const CamposEditarUsuario = ({values}) => {
    const {nombre_usuario: username, nombre: firstName, apellido: lastName, email, password = "" } = values
    return <>
        <Grid item xs={12}>
            <UsernameInput initialValue={username} />
        </Grid>
        <Grid item xs={12} >
            <FirstNameInput initialValue={firstName}/>
        </Grid>
        <Grid item xs={12} >
            <LastNameInput initialValue={lastName}/>
        </Grid>
        <Grid item xs={12}>
            <EmailInput initialValue={email}/>
        </Grid>
        <Grid item xs={12}>
            <PasswordInput initialValue={password}/>
        </Grid>
        <Grid item xs={12}>
            <ConfirmPasswordInput />
        </Grid>
        <Grid item xs={12}>
            <ButtonEditUsuario />
        </Grid>
    </>
}

export default CamposEditarUsuario;