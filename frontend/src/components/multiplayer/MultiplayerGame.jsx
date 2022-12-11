import { Button, Grid } from "@mui/material";
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
import { useSnackbar } from 'notistack';
import MiJugador from "./board-containers/MiJugadorContainer";
import BoardContainer from "./board-containers/BoardContainer";
import RivalContainer from "./board-containers/RivalContainer";


const MultiplayerGame = ({ juego }) => {
  const { campoJugadorEnemigo, miCampo, misRondasGanadas, miMano, miZonaJuego, zonaJuegoEnemigo, misEnergias, energiasDelEnemigo, rondasGanadasDelEnemigo, miJugador, jugadorEnemigo } = juego
  const history = useHistory()
  const numerosDeCartasSeleccionadas = useCartasSeleccionadas()
  const usuario = useUsuario()
  const { setGameId, setSocketId, setRoomsDisponibles, gameId } = useRoomData()
  const { setJuego } = useJuego()
  const { clearCartasSeleccionadas } = useClearCartasSeleccionadas()
  const toast = useContext(ContextToastContainer)
  const { enqueueSnackbar } = useSnackbar();

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
      //toast.info("Siguiente Ronda")
      enqueueSnackbar("Siguiente Ronda", { variant: "info", autoHideDuration: 3000 })
    });
    socket.on("UPDATE GAME DATA", ({ gameData }) => {
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)
    });
    socket.on("finished game", ({ juego }) => {
      //RESET todos los datos
      //toast.info("El juego ha terminado")
      enqueueSnackbar("El juego ha terminado", { variant: "info", autoHideDuration: 3000 })
      history.push(To.menuPrincipal())
    });
    socket.on("start battle phase", async () => {
      //toast.info("Empieza la fase de batalla")
      enqueueSnackbar("Empieza la fase de batalla", { variant: "info", autoHideDuration: 3000 })
      setWatchRivalsZone(true)
    });

    socket.on("finished summon phase", ({ gameData }) => {
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      setJuego(juegoMapeado)
      //toast.info("Finalizó la fase de invocación")
      enqueueSnackbar("Finalizó la fase de invocación", { variant: "info", autoHideDuration: 3000 })
    });

    socket.on("SHOW WINNER ROUND", async ({ gameData }) => {
      const esJugadorUno = isJugadorUno(usuario, gameData.juego.jugador1)
      const juegoMapeado = mapJuegoToFront(gameData.juego, esJugadorUno)
      const { miJugador, jugadorEnemigo } = juegoMapeado
      enqueueSnackbar(`${miJugador.nombre_usuario} posee ${misRondasGanadas} rondas ganadas`, { variant: "info", autoHideDuration: 2000 })
      enqueueSnackbar(`${jugadorEnemigo.nombre_usuario} posee ${rondasGanadasDelEnemigo} rondas ganadas`, { variant: "info", autoHideDuration: 2000 })
      setWatchRivalsZone(false)
    });

  }, [])

  function invocarCartas(numerosDeCartas) {
    socket.emit("finish summon phase", { gameId: gameId, usuarioId: usuario, cartasId: numerosDeCartas })
    setInvocoCartas(true)
    clearCartasSeleccionadas()
    //TODO: Mostrar algun spinner aguardando la invocación del rival
  }

  //FALTAN STATS DEL JUGADOR RIVAL
  return <BoardContainer>
    <RivalContainer>
      <Grid container spacing={2} alignItems="center" flexWrap="nowrap">
        <Grid item >
          <ContadorRondasGanadas cantidad={rondasGanadasDelEnemigo} />
        </Grid>
        <Grid item >
          <ContadoresDeEnergias cantidadesEnergias={energiasDelEnemigo} />
        </Grid>
        <Grid item >
          <InformacionJugador nombre={jugadorEnemigo.nombre_usuario} />
        </Grid>
      </Grid>
      <Grid container flexWrap="nowrap">
        {watchRivalsZone && <CartasSeleccionarJugador cartas={zonaJuegoEnemigo} />}
      </Grid>
    </RivalContainer>
    {!invocoCartas && <Button onClick={() => invocarCartas(numerosDeCartasSeleccionadas)}>Invocar</Button>}
    <MiJugador>
      <Grid container flexWrap="nowrap">
        <>
          {!invocoCartas && <CartasSeleccionarJugador cartas={miMano} />}
          <CartasSeleccionarJugador cartas={miZonaJuego} />
        </>
      </Grid>
      <Grid container spacing={2} alignItems="center" flexWrap="nowrap">
        <Grid item >
          <ContadorRondasGanadas cantidad={misRondasGanadas} />
        </Grid>
        <Grid item >
          <ContadoresDeEnergias cantidadesEnergias={misEnergias} />
        </Grid>
        <Grid item >
          <InformacionJugador nombre={miJugador.nombre_usuario} />
        </Grid>
      </Grid>
    </MiJugador>
  </BoardContainer>
}

export default MultiplayerGame;
