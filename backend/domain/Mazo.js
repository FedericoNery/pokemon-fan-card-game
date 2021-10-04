class Mazo {
    constructor(mazo) {
      this.cartas = mazo;
    }

    extraerCarta() {
      if(this.cartas.length > 0){
        return this.cartas.shift()
      }
    }

    extraerCartas(cantidad){
      let cartasExtraidas = []
      for (let index = 0; index < cantidad; index++) {
        cartasExtraidas.push(this.extraerCarta())
      }
      console.log("Extraidas " + cartasExtraidas)
      return cartasExtraidas
    }
}


module.exports = Mazo