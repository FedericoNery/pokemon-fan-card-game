import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
const initialState = {
    carroDeCartas: [],
    cartas: [],
    cartasFiltradas: [],
    filtro: {
        ofertas: false,
        disponibles: false,
        precioMinimo: null,
        precioMaximo: null,
        nombrePokemon: ""
    },
    isLoadingCartas: null,
    isLoadingCartasFiltradas: null,

    isUpdatingCartasTienda: null,
}

const tiendaSlice = createSlice({
    name: "mazos",
    initialState: initialState,
    reducers: {
        agregarCartaAlCarro(state, action){
            state.carroDeCartas.push(action.payload)
        },
        quitarCartaAlCarro(state, action){
            state.carroDeCartas = state.carroDeCartas.filter(x => x !== action.payload)
        },
        guardarCartas(state, action){
            state.cartas = action.payload
            //state.cartasFiltradas = action.payload
        },
        filtrarCartas(state, action){
            const filtro = action.payload
        },
        fetchCartasStart(state, action){
            state.isLoadingCartas = true
        },
        fetchCartasFinish(state, action){
            state.isLoadingCartas = false
        },
        changeEstadoCartaEnOferta(state, action){
            const id = action.payload
            const indiceCarta = _.findIndex(state.cartas, { _id: id });
            const isEnOferta = state.cartas[indiceCarta].oferta_en_tienda
            state.cartas[indiceCarta].oferta_en_tienda = !isEnOferta
        },
        changeEstadoCartaDisponible(state, action){
            const id = action.payload
            const indiceCarta = _.findIndex(state.cartas, { _id: id });
            const isDisponible = state.cartas[indiceCarta].disponible_en_tienda
            state.cartas[indiceCarta].disponible_en_tienda = !isDisponible
        },
        fetchCartasFiltradasStart(state, action){
            state.isLoadingCartasFiltradas = true
        },
        fetchCartasFiltradasFinish(state, action){
            state.isLoadingCartasFiltradas = false
        },
        guardarCartasFiltradas(state, action){
            state.cartasFiltradas = action.payload
        },
        startUpdateCartasTiendaAdministrador(state, action){
            state.isUpdatingCartasTienda = true
        },
        finishUpdateCartasTiendaAdministrador(state, action){
            state.isUpdatingCartasTienda = false
        },
        seleccionarCartaTienda(state, action){
            const id = action.payload
            //Buscar carta segun id, y cambiar estado de seleccionada
        },
        setNombreFiltro(state, action){

        },
        setOfertasFiltro(state, action){

        },
        setDisponiblesFiltro(state, action){

        },
        setTiposEnergias(state, action){

        },
        setCantidadEnergias(state, action){

        },
        resetFiltro(state, action){
            state.filtro = {
                ofertas: false,
                disponibles: false,
                precioMinimo: null,
                precioMaximo: null,
                nombrePokemon: ""
            }
        }


    }
})

export const tiendaReducer = tiendaSlice.reducer
export const tiendaActions = tiendaSlice.actions