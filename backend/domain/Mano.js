class Mano {
    constructor(mano) {
      this.cartas = mano;
    }
    setCartas(cartas){
      this.cartas = cartas
    }
    quitarCartas(listaIdsCartasAQuitar){
      const cartasADescartar = this.cartas.filter(x => !listaIdsCartasAQuitar.includes(x.numero))
      this.setCartas(cartasADescartar)
    }
    getCartas(){
      return this.cartas
    }
}


module.exports = Mano