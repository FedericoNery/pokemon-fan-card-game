import { useSelector } from "react-redux"

export const useSocket = () => {
    const roomReducer = useSelector(state => state.roomReducer)
    return roomReducer?.socket
}