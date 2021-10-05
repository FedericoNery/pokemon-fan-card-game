class ZonaJuego {
    constructor(cartas = []) {
      this.cartas = cartas;
    }

    setCartas(cartas){
        this.cartas = cartas
    }

    getAtaque(){
      return this.cartas.map(x => x.ataque).reduce((x,y) => x + y)
    }

    getDefensa(){
      return this.cartas.map(x => x.defensa).reduce((x,y) => x + y)
    }
}

module.exports = ZonaJuego