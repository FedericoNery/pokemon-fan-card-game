import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { actualizarUsuario, getUsuarioById } from '../../core/services/usuarios';
import { useGetById } from '../../hooks/useGetById';
import { useNumeroUsuario } from '../../hooks/useNumeroUsuario';
import { desloguearse } from '../../redux/actionCreators/authenticate';
import CamposEditarUsuario from './CamposEditarUsuario';
import SkeletonEditarUsuario from './SkeletonEditarUsuario';

const EditarUsuario = ({ desloguearse }) => {
    const numeroUsuario = useNumeroUsuario()
    const { isLoading, values } = useGetById(numeroUsuario, getUsuarioById)

    const onActualizarUsuario = async (event) => {
        event.preventDefault();
        const payload = {
            email: event.target.email.value,
            //password: event.target.password.value,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            //username: event.target.username.value,
            //confirmpassword: event.target.confirmpassword.value
        }
        try {
            await actualizarUsuario(numeroUsuario, payload)
        }
        catch (error) {
        }
    }

    return <Container fixed>
        <Typography variant="h3" gutterBottom align='center' sx={{ marginTop: 5 }}>
            Editar mi usuario
        </Typography>
        <Box component="form" noValidate onSubmit={onActualizarUsuario}
            sx={{ mt: 5, width: "60%", marginLeft: "calc(60% - 40%)", justifyContent: "center", display: "flex" }}>
            <Grid container spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                display="flex"
            >
                {
                    isLoading ?
                        <SkeletonEditarUsuario /> :
                        <CamposEditarUsuario values={values} />
                }

            </Grid>
        </Box>
    </Container>
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { desloguearse }, dispatch
    )
}

export default compose(
    connect(null, mapDispatchToProps)
)(EditarUsuario)
