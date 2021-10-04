class ZonaJuego {
    constructor(cartas = []) {
      this.cartas = cartas;
    }

    setCartas(cartas){
        this.cartas = cartas
    }
}

module.exports = ZonaJuego