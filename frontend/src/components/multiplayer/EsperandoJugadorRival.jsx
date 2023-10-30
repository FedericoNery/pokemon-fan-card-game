import { useRoomData } from "../../hooks/multiplayer/useRoomData";

const EsperandoJugadorRival = () => {
    const roomData = useRoomData()
    const { socketId, gameId } = roomData
    return <>
    <h1>Socket Id: {socketId}</h1>
    <h1>Game Id: {gameId}</h1>
    </>
}
 
export default EsperandoJugadorRival;