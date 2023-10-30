import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators, compose } from 'redux'
import { useListaMazosDelUsuario } from '../../hooks/useListaMazosDelUsuario'
import { cargarDatosGeneralesMazos } from '../../redux/actionCreators/mazos'
import MazosParaSeleccionar from './MazosParaSeleccionar'

const SeleccionarMazo = (props) => {
    const { cargarDatosGeneralesMazos, mazosDatosGenerales } = props
    const [isLoading, setIsLoading] = useState(true)
    const idsDeLosMazos = useListaMazosDelUsuario()

    useEffect(async() => {
        setIsLoading(true)
        await cargarDatosGeneralesMazos(idsDeLosMazos)
        setIsLoading(false)
    }, [])

    return isLoading ? <></> : <MazosParaSeleccionar mazos={mazosDatosGenerales}/>
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
)(SeleccionarMazo)
