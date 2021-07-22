import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    estaLogueado: false,
    usuario: null
}

const authenticateSlice = createSlice({
    name: "authenticate",
    initialState: initialState,
    reducers: {
        loguearse(state, action){},
        desloguearse(state, action){},
    }
})

export const authenticateReducer = authenticateSlice.reducer
export const authenticateActions = authenticateSlice.actions