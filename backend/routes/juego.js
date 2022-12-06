const router = require('express').Router();


router.route('/batallar').post(async (req, res) => {
  const { idJugador, monedasGanadas = 1000 } = req.body

  try {
    await aumentarPartidasGanadasYMonedas(juego.jugador1)
    await aumentarPartidasPerdidas(juego.jugador2)
    res.json(juego)
  }
  catch (error) {
    res.sendStatus(500)
  }
});

module.exports = router;
