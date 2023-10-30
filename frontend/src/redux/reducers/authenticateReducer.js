import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    estaLogueado: false,
    usuario: null,
    jwt: null
}

const authenticateSlice = createSlice({
    name: "authenticate",
    initialState: initialState,
    reducers: {
        loguearse(state, action){
            state.usuario = action.payload.usuario
            state.estaLogueado = true
            state.jwt = action.payload.token
        },
        desloguearse(state, action){
            state = initialState
        },
    }
})

export const authenticateReducer = authenticateSlice.reducer
export const authenticateActions = authenticateSlice.actions