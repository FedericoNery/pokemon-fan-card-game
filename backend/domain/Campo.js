const Mano = require('./Mano')

const Descarte = require('./Descarte')
const Mazo = require('./Mazo')
const ZonaJuego = require('./ZonaJuego')
const { obtenerEnergias } = require('../services/manoService')
const CODIGO_TIPO_CARTA = require('../utils/enums').CODIGO_TIPO_CARTA
class Campo {
  constructor(mazo, mano = [], zonaJuego = [], descarte = []) {
    this.mano = new Mano(mano);
    this.zonaJuego = new ZonaJuego();
    this.mazo = new Mazo(mazo);
    this.descarte = new Descarte(descarte);
    this.cantidadesEnergias = {}
  }

  repartirCartas(cantidad) {
    const cartasExtraidas = this.mazo.extraerCartas(cantidad)
    this.mano.setCartas(cartasExtraidas)
  }

  contarEnergias() {
    this.cantidadesEnergias = obtenerEnergias(this.mano)
  }
  getCantidadEnergias() {
    return this.cantidadesEnergias
  }

  invocarCartas(listaIdsCartasAInvocar) {
    const cartasAInvocar = this.mano.getCartas().filter(x => 'ataque' in x && listaIdsCartasAInvocar.includes(x.numero))
    this.zonaJuego.setCartas(cartasAInvocar)
    this.mano.quitarCartas(listaIdsCartasAInvocar)
  }

  invocarCartasComputadora() {
    const mejoresCartasOrdenadas = this.mano.getCartas().filter(x => 'ataque' in x).sort((a, b) => (a.ataque > b.ataque) ? 1 : -1)
    console.log("Mejores cartas")
    console.log(mejoresCartasOrdenadas)
    if (mejoresCartasOrdenadas.length > 0) {
      mejoresCartasOrdenadas.map(x => this.invocarCartaComputadora(x))
    }
    //Quitar cartas invocadas de la mano de la computadora y setear bien la zona de juego
  }

  esValidaLaInvocacionDeLaCarta(carta, cantidadesEnergias){
    console.log(carta)
    const energias = cantidadesEnergias[carta.tipo_energia] //Si o si el tolowercase porque sino no puede acceder a la clave del objeto
    console.log("cant energia -> " + energias)
    console.log("Es valida la invocacion")
    console.log(carta.cantidad_energia <= energias)
    return carta.cantidad_energia <= energias
  }

  esValidaLaInvocacionDeLaCartaEnComputadora(carta, cantidadesEnergias){
    console.log(carta)
    console.log(cantidadesEnergias)
    const energias = cantidadesEnergias[carta.tipo_energia.toLowerCase()] //Si o si el tolowercase porque sino no puede acceder a la clave del objeto
    console.log("cant energia -> " + energias)
    console.log("Es valida la invocacion")
    console.log(carta.cantidad_energia <= energias)
    return carta.cantidad_energia <= energias
  }

  invocarCartaComputadora(carta) {
    if (this.esValidaLaInvocacionDeLaCartaEnComputadora(carta, this.cantidadesEnergias)) {
      console.log("entro")
      this.zonaJuego.invocarCarta(carta)
      this.quitarEnergiasGastadasPor(carta)
    }
  }

  invocarCarta(carta) {
    if (this.esValidaLaInvocacionDeLaCarta(carta, this.cantidadesEnergias)) {
      console.log("entro")
      this.zonaJuego.invocarCarta(carta)
      this.quitarEnergiasGastadasPor(carta)
    }
  }

  quitarEnergiasGastadasPor(carta) {
    const tipoEnergia = carta.tipo_energia
    const energiasARestar = carta.cantidad_energia
    switch (tipoEnergia) {
      case CODIGO_TIPO_CARTA.AGUA:
        this.cantidadesEnergias.agua -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.DRAGON:
        this.cantidadesEnergias.dragon -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.FAIRY:
        this.cantidadesEnergias.fairy -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.FUEGO:
        this.cantidadesEnergias.fuego -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.HIERBA:
        this.cantidadesEnergias.hierba -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.INCOLORO:
        this.cantidadesEnergias.incoloro -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.LUCHA:
        this.cantidadesEnergias.lucha -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.METAL:
        this.cantidadesEnergias.metal -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.OSCURO:
        this.cantidadesEnergias.oscuro -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.PSIQUICO:
        this.cantidadesEnergias.psiquico -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.RAYO:
        this.cantidadesEnergias.rayo -= energiasARestar
        break;
      case CODIGO_TIPO_CARTA.TIERRA:
        this.cantidadesEnergias.tierra -= energiasARestar
        break;
      default:
        throw "Error con el tipo de energía";
    }
  }

  getAtaque(){
    this.zonaJuego.getAtaque()
  }
  getDefensa(){
    this.zonaJuego.getDefensa()
  }
}

module.exports = Campo