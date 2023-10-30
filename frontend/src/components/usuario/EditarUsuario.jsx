import React from 'react'
import { useTheme } from '@emotion/react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router';
import { actualizarUsuario, getUsuarioById } from '../../core/services/usuarios';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { desloguearse } from '../../redux/actionCreators/authenticate';
import { To } from '../../utils/routes';
import { useGetById } from '../../hooks/useGetById';
import SkeletonEditarUsuario from './SkeletonEditarUsuario';
import CamposEditarUsuario from './CamposEditarUsuario';
import {useNumeroUsuario} from '../../hooks/useNumeroUsuario'

const EditarUsuario = ({ desloguearse }) => {
    const theme = useTheme();
    const history = useHistory()
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
            desloguearse()
            history.push(To.login())
        }
        catch (error) {
            console.log(error)
        }
    }

    return <Box component="form" noValidate onSubmit={onActualizarUsuario} 
    sx={{ mt: 3, "margin-left": "200px", "margin-right": "200px", width: "60%" }}>
        <Grid container spacing={2} 
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
            {
                isLoading ? 
                <SkeletonEditarUsuario /> :
                <CamposEditarUsuario values={values}/>
            }
            
        </Grid>
    </Box>
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      { desloguearse }, dispatch
    )
  }
  
  export default compose(
    connect(null, mapDispatchToProps)
  )(EditarUsuario)
