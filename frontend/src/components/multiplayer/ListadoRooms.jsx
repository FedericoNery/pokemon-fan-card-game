import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCartasDelMazoById } from "../../core/services/mazos";
import { EMIT_EVENTS, SUBSCRIPTIONS_EVENTS } from "../../core/socket/events_consts";
import { useRoomData } from "../../hooks/multiplayer/useRoomData";
import { useJuego } from "../../hooks/useJuego";
import { useMazoSeleccionado } from "../../hooks/useMazoSeleccionado";
import { useUsuario } from "../../hooks/useUsuario";
import { To } from "../../utils/routes";
import { isJugadorUno } from "./isJugadorUno";
import { mapJuegoToFront } from "./mapJuegoToFront";
import { socket } from "./WaitingRoom";

const ListadoRooms = () => {
  const { roomsDisponibles } = useRoomData()
  const history = useHistory()
  const usuario = useUsuario()
  const numeroMazoSeleccionado = useMazoSeleccionado()

  const { setGameId, setSocketId, setRoomsDisponibles } = useRoomData()
  const { setJuego } = useJuego()

  useEffect(() => {
    socket.on(SUBSCRIPTIONS_EVENTS.START_GAME, ({ gameId, socketId, gameData }) => {
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)

      history.push(To.juego_multiplayer())
    })
  }, [])


  return roomsDisponibles.length > 0 ?
    roomsDisponibles.map((value, index) => {
      return <div key={`kdiv${index}`}>
        <p>Game Id:{value}</p>
        <button onClick={async () => {
          //setear el gameId acá
          const res = await getCartasDelMazoById(numeroMazoSeleccionado)
          const mazo = res.data
          socket.emit(EMIT_EVENTS.PLAYER_JOIN_GAME, { gameIdToJoin: value, usuario, mazo })
          //history.push(To.juego_multiplayer())
        }}>Join Game: {value}</button>
      </div>
    }) : <h1>No hay rooms disponibles</h1>
}

export default ListadoRooms;
