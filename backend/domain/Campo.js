const Mano = require('./Mano')

const Descarte = require('./Descarte')
const Mazo = require('./Mazo')
const ZonaJuego = require('./ZonaJuego')
const { obtenerEnergias, obtenerEnergiasYSumarlas } = require('../services/manoService')
const CODIGO_TIPO_CARTA = require('../utils/enums').CODIGO_TIPO_CARTA
class Campo {
  constructor(mazo = [], mano = [], zonaJuego = [], descarte = []) {
    this.mano = new Mano(mano);
    this.zonaJuego = new ZonaJuego(zonaJuego);
    this.mazo = new Mazo(mazo);
    this.descarte = new Descarte(descarte);
    this.cantidadesEnergias = null
  }

  repartirCartas(cantidad) {
    const cartasExtraidas = this.mazo.extraerCartas(cantidad)
    this.mano.setCartas(cartasExtraidas)
  }

  contarEnergias() {
    if(this.cantidadesEnergias !== null){
      this.cantidadesEnergias = obtenerEnergiasYSumarlas(this.mano, this.cantidadesEnergias)
    }
    else{
      this.cantidadesEnergias = obtenerEnergias(this.mano)
    }
  }
  getCantidadEnergias() {
    return this.cantidadesEnergias
  }

  invocarCartas(listaIdsCartasAInvocar) {
    const cartasAInvocar = this.mano.getCartasAInvocarFrom(listaIdsCartasAInvocar)
    this.zonaJuego.setCartas(cartasAInvocar)
    this.mano.quitarCartas(listaIdsCartasAInvocar)
  }

  invocarCartasComputadora() {
    const mejoresCartasOrdenadas = this.mano.getCartasOrdenadasPorAtaque()
    if (mejoresCartasOrdenadas.length > 0) {
      mejoresCartasOrdenadas.map(x => this.invocarCartaComputadora(x))
    }
    //Quitar cartas invocadas de la mano de la computadora y setear bien la zona de juego
  }

  esValidaLaInvocacionDeLaCarta(carta, cantidadesEnergias){
    const energias = cantidadesEnergias[carta.tipo_energia] //Si o si el tolowercase porque sino no puede acceder a la clave del objeto
    return carta.cantidad_energia <= energias
  }

  esValidaLaInvocacionDeLaCartaEnComputadora(carta, cantidadesEnergias){
    const energias = cantidadesEnergias[carta.tipo_energia.toLowerCase()] //Si o si el tolowercase porque sino no puede acceder a la clave del objeto
    return carta.cantidad_energia <= energias
  }

  invocarCartaComputadora(carta) {
    if (this.esValidaLaInvocacionDeLaCartaEnComputadora(carta, this.cantidadesEnergias)) {
      this.zonaJuego.invocarCarta(carta)
      this.quitarEnergiasGastadasPor(carta)
    }
  }

  invocarCarta(carta) {
    if (this.esValidaLaInvocacionDeLaCarta(carta, this.cantidadesEnergias)) {
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

  descartarCartasMano(){
    if(this.mano.getLength() > 0){
      this.mano.getCartas().map((carta) => this.descarte.agregarCarta(carta))
      this.mano.clear()
    }
  }

  descartarCartasCampo(){
    if(this.zonaJuego.getLength() > 0){
      this.zonaJuego.getCartas().map((carta) => this.descarte.agregarCarta(carta))
      this.zonaJuego.clear()
    }
  }

  getAtaque(){
    return this.zonaJuego.getAtaque()
  }
  getDefensa(){
    return this.zonaJuego.getDefensa()
  }

  getMano(){
    return this.mano
  }
  getMazo(){
    return this.mazo
  }
  getZonaJuego(){
    return this.zonaJuego
  }
}

module.exports = Campo