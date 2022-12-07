import { useTheme } from '@emotion/react'
import { Container, Skeleton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators, compose } from 'redux'
import { useListaMazosDelUsuario } from '../../hooks/useListaMazosDelUsuario'
import { cargarDatosGeneralesMazos } from '../../redux/actionCreators/mazos'
import VisualizarDatosGeneralesMazos from './seleccion-jugar/templates/VisualizarDatosGeneralesMazos'

const ConfigurarMazos = (props) => {
  const { cargarDatosGeneralesMazos, mazosDatosGenerales } = props
  const [isLoading, setIsLoading] = useState(true)
  const idsDeLosMazos = useListaMazosDelUsuario()
  const theme = useTheme();
  const isSun = theme.palette.mode === "light"

  useEffect(async () => {
    setIsLoading(true)
    await cargarDatosGeneralesMazos(idsDeLosMazos)
    setIsLoading(false)
  }, [])

  return isLoading ? <>
    <Skeleton variant="rectangular" width={210} height={60} />
    <Skeleton variant="rectangular" width={210} height={60} />
    <Skeleton variant="rectangular" width={210} height={60} />
  </> :
    <Container fixed sx={{ marginTop: 10 }}>
      <Typography variant="h3" gutterBottom align='center' color={isSun ? "black" : "white"}>
        Seleccione un mazo para editar
      </Typography>
      <VisualizarDatosGeneralesMazos mazos={mazosDatosGenerales} />
    </Container>
}

const mapStateToProps = state => {
  const mazosDatosGenerales = state.mazosReducer?.mazosDatosGenerales
  return { mazosDatosGenerales }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { cargarDatosGeneralesMazos }, dispatch
  )
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ConfigurarMazos)
