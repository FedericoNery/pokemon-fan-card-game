const router = require('express').Router();
const FASES_JUEGO = require('../utils/enums').FASES_JUEGO;
const juegoService = require('../services/juegoService')

let juego = null

router.route('/iniciar').post(async (req, res) => {
  const { idJugadorLogueado, idMazoSeleccionado } = req.body
  await juegoService.iniciarJuego(idJugadorLogueado, idMazoSeleccionado).then(res => {
    juego = res
    return res
  })
  console.log("ESTADO DEL JUEGO")
  console.log(juego)
  if (juego !== null) {
    res.json(juego)
    //res.sendStatus(200)
  }
  else {
    res.sendStatus(500)
  }
});

router.route('/invocar').post(async (req, res) => {
  const { cartas: listaNumerosDeCartas, idJugador } = req.body
  const campo = juego.getCampoByIdJugador(idJugador)
  const cartasAInvocar = juegoService.getCartasInvocadas(campo.mano.getCartas(), listaNumerosDeCartas)
  let esValidaLaInvocacion = juegoService.invocacionCartasPokemon(campo.getCantidadEnergias(), cartasAInvocar)
  if (esValidaLaInvocacion) {
    juego.invocarCartasPokemon(cartasAInvocar, idJugador)
    res.json(juego)
    res.sendStatus(200)
  }
  else {
    res.sendStatus(500)
  }
});

router.route('/batallar').post(async (req, res) => {
  try {
    juego.iniciarBatalla()
    res.sendStatus(200)
  }
  catch (error) {
    res.sendStatus(500)
  }
});

/*GET BY NUMERO Carta ENERGIA*/
router.route('/fase').get((req, res) => {
  //Fase invoca a alguna función que haga pasar de fase
  const num = req.query.numero;

  if (num !== undefined) {
    switch (num) {
      case FASES_JUEGO.INICIAR_JUEGO: {
        res.json(juegoService.iniciarJuego())
        break;
      }

      case FASES_JUEGO.INICIAR_RONDA:
        {
          res.json(juegoService.iniciarJuego())
          break;
        }
      case FASES_JUEGO.DETERMINACION_TURNO: {
        const turnoSeleccionado = req.query.turnoSeleccionado
        res.json(juegoService.determinacionDeTurnos(turnoSeleccionado))
        break;
      }
      case FASES_JUEGO.REPARTIR_CARTAS:
        {
          res.json(juegoService.repartirCartas(turnoSeleccionado))

          break;
        }
      case FASES_JUEGO.PROGRAMACION_1:
        {
          res.json(juegoService.invocacionCartasProgramacion(turnoSeleccionado))

          break;
        }
      case FASES_JUEGO.INVOCACION: {
        res.json(juegoService.invocacionCartasPokemon(turnoSeleccionado))

        break;
      }
      case FASES_JUEGO.PROGRAMACION_2:
        {
          res.json(juegoService.invocacionCartasProgramacion2(turnoSeleccionado))

          break;
        }
      case FASES_JUEGO.BATALLA:
        {
          res.json(juegoService.batalla(turnoSeleccionado))
          break;
        }
      case FASES_JUEGO.DETERMINAR_GANADOR_RONDA:
        {
          res.json(juegoService.determinarGanadorRonda(turnoSeleccionado))
          break;
        }

      case FASES_JUEGO.DETERMINAR_GANADOR_PARTIDA:
        {
          res.json(juegoService.determinarGanadorPartida(turnoSeleccionado))
          break;
        }
      default:
        break;
    }
  }
  else {

  }
});

module.exports = router;
