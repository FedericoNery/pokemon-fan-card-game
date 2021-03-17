const Carta = require("./Carta")

class CartaPokemon extends Carta {
    constructor(numero, nombre, ps, ataque, defensa, ataque_esp, defensa_esp, velocidad, suma, tipo_energia, cantidad_energia) {
      super(numero, nombre);
      this.pokemon = nombre;
      this.ps = ps;
      this.ataque = ataque;
      this.defensa = defensa;
      this.ataque_esp = ataque_esp;
      this.defensa_esp = defensa_esp;
      this.velocidad = velocidad;
      this.suma = suma;
      this.tipo_energia = tipo_energia;
      this.cantidad_energia = cantidad_energia;
    }
  }

  module.exports = CartaPokemon