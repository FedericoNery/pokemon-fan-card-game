import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRoomData } from "../../hooks/multiplayer/useRoomData";
import { useCartasSeleccionadas } from "../../hooks/useCartasSeleccionadas";
import { useClearCartasSeleccionadas } from "../../hooks/useClearCartasSeleccionadas";
import { useJuego } from "../../hooks/useJuego";
import { useUsuario } from "../../hooks/useUsuario";
import { ROUTES, To } from "../../utils/routes";
import sleep from "../../utils/timeout";
import ContadoresDeEnergias from "../contadores-energias/ContadoresDeEnergias";
import BoxCartas from "../juego/BoxCartas";
import CartasSeleccionarJugador from "../juego/CartasSeleccionarJugador";
import ContadorRondasGanadas from "../juego/ContadorRondasGanadas";
import InformacionJugador from "../juego/InformacionJugador";
import { ContextToastContainer } from "../ui/toasts/ToastContainer";
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
  const { clearCartasSeleccionadas } = useClearCartasSeleccionadas()
  const toast = useContext(ContextToastContainer)


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
      setInvocoCartas(false)
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)
      toast.info("Siguiente Ronda")
    });
    socket.on("UPDATE GAME DATA", ({ gameData }) => {
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)
    });
    socket.on("finished game", ({ juego }) => {
      //RESET todos los datos
      toast.info("El juego ha terminado")
      history.push(To.menuPrincipal())
    });
    socket.on("start battle phase", async ({ gameData }) => {
      toast.info("Empieza la fase de batalla")
      setWatchRivalsZone(true)
    });

    socket.on("finished summon phase", ({ gameData }) => {
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)
      toast.info("Finalizó la fase de invocación")
    });

  }, [])

  function invocarCartas(numerosDeCartas) {
    socket.emit("finish summon phase", { gameId: gameId, usuarioId: usuario, cartasId: numerosDeCartas })
    setInvocoCartas(true)
    clearCartasSeleccionadas()
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
