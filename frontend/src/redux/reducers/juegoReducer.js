import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mazoSeleccionadoUsuario: null,
    juego: null,
    cartasSeleccionadas: []
}

const juegoSlice = createSlice({
    name: "juego",
    initialState: initialState,
    reducers: {
        guardarMazoSeleccionado(state, action){
            state.mazoSeleccionadoUsuario = action.payload
        },
        iniciarJuego(state, action){
            state.juego = action.payload
        },
        invocarCartas(state, action){
            state.juego = action.payload
        },
        agregarCartaSeleccionada(state, action){
            debugger
            const cartasSeleccionadas = [...state.cartasSeleccionadas, action.payload]
            state.cartasSeleccionadas = cartasSeleccionadas
        },
        quitarCartaSeleccionada(state, action){
            const cartasSeleccionadas = state.cartasSeleccionadas.filter(x => x !== action.payload)
            state.cartasSeleccionadas = cartasSeleccionadas
        },
        terminarRonda(state, action){
            state.cartasSeleccionadas = []
            state.juego = action.payload
        }
    }
})

export const juegoReducer = juegoSlice.reducer
export const juegoActions = juegoSlice.actions