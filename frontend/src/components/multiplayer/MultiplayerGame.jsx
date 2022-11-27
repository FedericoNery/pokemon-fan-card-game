import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRoomData } from "../../hooks/multiplayer/useRoomData";
import { useCartasSeleccionadas } from "../../hooks/useCartasSeleccionadas";
import { useJuego } from "../../hooks/useJuego";
import { useUsuario } from "../../hooks/useUsuario";
import { ROUTES, To } from "../../utils/routes";
import sleep from "../../utils/timeout";
import ContadoresDeEnergias from "../contadores-energias/ContadoresDeEnergias";
import BoxCartas from "../juego/BoxCartas";
import CartasSeleccionarJugador from "../juego/CartasSeleccionarJugador";
import ContadorRondasGanadas from "../juego/ContadorRondasGanadas";
import InformacionJugador from "../juego/InformacionJugador";
import { isJugadorUno } from "./isJugadorUno";
import { mapJuegoToFront } from "./mapJuegoToFront";
import { socket } from "./WaitingRoom"



const MultiplayerGame = ({ juego }) => {
  const { campoJugadorEnemigo, miCampo, misRondasGanadas, miMano, miZonaJuego, zonaJuegoEnemigo, misEnergias, energiasDelEnemigo, rondasGanadasDelEnemigo } = juego
  const history = useHistory()
  const numerosDeCartasSeleccionadas = useCartasSeleccionadas()
  const usuario = useUsuario()
  const { setGameId, setSocketId, setRoomsDisponibles, gameId } = useRoomData()
  const { setJuego } = useJuego()
  const esJugadorUno = isJugadorUno(usuario, juego.miJugador)
  //const invocoCartas = esJugadorUno ? juego.jugador1InvocoCartas : juego.jugador2InvocoCartas
  console.log("jugador1InvocoCartas", juego.jugador1InvocoCartas)
  console.log("jugador2InvocoCartas", juego.jugador2InvocoCartas)
  console.log("esJugadorUno", esJugadorUno)
  const [watchRivalsZone, setWatchRivalsZone] = useState(false)
  const [invocoCartas, setInvocoCartas] = useState(false)

  useEffect(() => {
    socket.on("On_Error_InvocarCartas", ({ mensajeError }) => {
      //TOAST CON ERROR
    });
    socket.on("finish battle phase", ({ gameData }) => {

    });
    socket.on("START NEXT ROUND", ({ gameData }) => {
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)
    });
    socket.on("UPDATE GAME DATA", ({ gameData }) => {
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)
    });
    socket.on("finished game", ({ juego }) => {
      //RESET todos los datos

      history.push(To.home())
    });
    socket.on("start battle phase", async ({ gameData }) => {
      setWatchRivalsZone(true)
    });

    socket.on("finished summon phase", ({ gameData }) => {
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)
    });

  }, [])

  function invocarCartas(numerosDeCartas) {
    debugger
    socket.emit("finish summon phase", { gameId: gameId, usuarioId: usuario, cartasId: numerosDeCartas })
    setInvocoCartas(true)
  }

  //FALTAN STATS DEL JUGADOR RIVAL
  return <>
    <ContadoresDeEnergias cantidadesEnergias={energiasDelEnemigo} />
    <ContadorRondasGanadas cantidad={rondasGanadasDelEnemigo} />
    <InformacionJugador nombre="PRUEBA PRUEBA" />
    {watchRivalsZone &&
      <BoxCartas>
        <CartasSeleccionarJugador cartas={zonaJuegoEnemigo} />
      </BoxCartas>
    }
    {!invocoCartas && <Button onClick={() => invocarCartas(numerosDeCartasSeleccionadas)}>Invocar</Button>}
    <BoxCartas>
      {!invocoCartas && <CartasSeleccionarJugador cartas={miMano} />}
      <CartasSeleccionarJugador cartas={miZonaJuego} />
    </BoxCartas>
    <InformacionJugador nombre="PRUEBA PRUEBA" />
    <ContadorRondasGanadas cantidad={misRondasGanadas} />
    <ContadoresDeEnergias cantidadesEnergias={misEnergias} />
  </>
}

export default MultiplayerGame;