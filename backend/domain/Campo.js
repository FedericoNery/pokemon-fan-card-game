const Mano = require('./Mano')

const Descarte = require('./Descarte')
const Mazo = require('./Mazo')
const ZonaJuego = require('./ZonaJuego')
const { obtenerEnergias } = require('../services/manoService')
const CODIGO_TIPO_CARTA = require('../utils/enums')
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
    const cartasAInvocar = this.mano.getCartas().filter(x => 'ataque' in x).filter(x => listaIdsCartasAInvocar.includes(x.numero))
    this.zonaJuego.setCartas(cartasAInvocar)
    this.mano.quitarCartas(listaIdsCartasAInvocar)
  }

  invocarCartasComputadora() {
    const mejoresCartasOrdenadas = this.mano.getCartas().filter(x => 'ataque' in x).sort((a, b) => (a.ataque > b.ataque) ? 1 : -1)
    if (mejoresCartasOrdenadas.length > 0) {
      mejoresCartasOrdenadas.map(x => this.invocarCarta(x))
    }
  }

  esValidaLaInvocacionDeLaCarta(carta, cantidadesEnergias){
    console.log(carta)
    const energias = cantidadesEnergias[carta.tipo_energia]
    return carta.cantidad_energia <= energias
  }

  invocarCarta(carta) {
    if (this.esValidaLaInvocacionDeLaCarta(carta, this.cantidadesEnergias)) {
      this.zonaJuego.invocarCarta(carta)
      this.cantidadesEnergias = this.quitarEnergiasGastadasPor(carta)
    }
  }

  quitarEnergiasGastadasPor(carta) {
    const tipoEnergia = carta.tipo_energia
    switch (tipoEnergia) {
      case CODIGO_TIPO_CARTA.AGUA:
        this.cantidadesEnergias.agua--
        break;
      case CODIGO_TIPO_CARTA.DRAGON:
        this.cantidadesEnergias.dragon--
        break;
      case CODIGO_TIPO_CARTA.FAIRY:
        this.cantidadesEnergias.fairy--
        break;
      case CODIGO_TIPO_CARTA.FUEGO:
        this.cantidadesEnergias.fuego--
        break;
      case CODIGO_TIPO_CARTA.HIERBA:
        this.cantidadesEnergias.hierba--
        break;
      case CODIGO_TIPO_CARTA.INCOLORO:
        this.cantidadesEnergias.incoloro--
        break;
      case CODIGO_TIPO_CARTA.LUCHA:
        this.cantidadesEnergias.lucha--
        break;
      case CODIGO_TIPO_CARTA.METAL:
        this.cantidadesEnergias.metal--
        break;
      case CODIGO_TIPO_CARTA.OSCURO:
        this.cantidadesEnergias.oscuro--
        break;
      case CODIGO_TIPO_CARTA.PSIQUICO:
        this.cantidadesEnergias.psiquico--
        break;
      case CODIGO_TIPO_CARTA.RAYO:
        this.cantidadesEnergias.rayo--
        break;
      case CODIGO_TIPO_CARTA.TIERRA:
        this.cantidadesEnergias.tierra--
        break;
      default:
        throw "Error con el tipo de energía";
    }
  }
}

module.exports = Campo