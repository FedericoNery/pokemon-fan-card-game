import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mazosDatosGenerales: [],
    mazosDetallados: []
}

const mazosSlice = createSlice({
    name: "mazos",
    initialState: initialState,
    reducers: {
        guardarMazosDatosGenerales(state, action){
            state.mazosDatosGenerales = action.payload
        },
        guardarMazosDetallados(state, action){
            state.mazosDetallados = action.payload
        },
    }
})

export const mazosReducer = mazosSlice.reducer
export const mazosActions = mazosSlice.actions