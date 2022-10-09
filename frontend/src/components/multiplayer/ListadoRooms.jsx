import { useHistory } from "react-router-dom";
import { EMIT_EVENTS } from "../../core/socket/events_consts";
import { useRoomData } from "../../hooks/multiplayer/useRoomData";
import { To } from "../../utils/routes";
import { socket } from "./WaitingRoom";

const ListadoRooms = () => {
    const { roomsDisponibles } = useRoomData()
    const history = useHistory()

    return roomsDisponibles.length > 0 ?
        roomsDisponibles.map((value, index) => {
            return <>
                <p key={`p${index}`}>Game Id:{value}</p>
                <button key={`b${index}`} onClick={() => {
                    socket.emit(EMIT_EVENTS.PLAYER_JOIN_GAME, value)
                    history.push(To.juego_multiplayer())
                }}>Join Game: {value}</button>
            </>
        }) : <h1>No hay rooms disponibles</h1>
}

export default ListadoRooms;