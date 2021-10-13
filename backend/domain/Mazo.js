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
      return cartasExtraidas
    }

    mezclar = () => {
      var j, x, i;
      for (i = this.cartas.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = this.cartas[i];
          this.cartas[i] = this.cartas[j];
          this.cartas[j] = x;
      }
  }
}


module.exports = Mazo