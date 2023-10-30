const Carta = require("./Carta")

class CartaEntrenador extends Carta {
    constructor(...props) {
      super(props.numero, props.nombre);
      this.agarrar = props.agarrar;
      this.descartar = props.descartar;
      this.eliminar = props.eliminar;
    }
  }

  module.exports = CartaEntrenador