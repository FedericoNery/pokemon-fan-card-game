import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { roomActions } from "../../redux/reducers/roomReducer"

export const useRoomData = () => {
    const roomReducer = useSelector(state => state.roomReducer)
    const dispatch = useDispatch()
    const setGameId = useCallback((value) => dispatch(roomActions.setGameId(value)), [])
    const setSocketId = useCallback((value) => dispatch(roomActions.setSocketId(value)), [])
    const setRoomsDisponibles = useCallback((value) => dispatch(roomActions.setRoomsDisponibles(value)), [])
    const { socketId, gameId, roomsDisponibles } = roomReducer
    return {socketId, gameId, roomsDisponibles, setGameId, setSocketId, setRoomsDisponibles}
}
