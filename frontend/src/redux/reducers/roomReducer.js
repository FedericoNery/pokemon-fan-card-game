import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    roomId: null,
    socketId: null,
    gameId: null,
    roomsDisponibles: [],
    password: null,
    username: null,
    action: null,
    options: null,
    error: null,
    socket: null
}

const roomSlice = createSlice({
    name: "room",
    initialState: initialState,
    reducers: {
        setRoomId(state, action){
            state.roomId = action.payload
        },
        setSocketId(state, action){
            state.socketId = action.payload
        },
        setGameId(state, action){
            state.gameId = action.payload
        },
        setRoomsDisponibles(state, action){
            state.roomsDisponibles = action.payload
        },
        setPassword(state, action){
            state.password = action.payload
        },
        setUsername(state, action){
            state.username = action.payload
        },
        setAction(state, action){
            state.action = action.payload
        },
        setOptions(state, action){
            state.options = action.payload
        },
        setError(state, action){
            state.error = action.payload
        },
        setSocket(state, action){
            state.socket = action.payload
        },
        clearRoom(state, action){
            state = initialState
        },
    }
})

export const roomReducer = roomSlice.reducer
export const roomActions = roomSlice.actions