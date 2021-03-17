
const repartirMano = (mazo, cantidadCartas) => {
    const mano = agarrarCarta(mazo, undefined ,cantidadCartas)
    quitarCarta(mazo)
    return mano
}

const mezclar = (mazo) => {
    var j, x, i;
    for (i = mazo.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = mazo[i];
        mazo[i] = mazo[j];
        mazo[j] = x;
    }
    return mazo;
}

const agarrarCarta = (mazo, numeroCarta, cantidadCartas) => {
    if(numeroCarta != undefined)
    {
        if(Array.isArray(numeroCarta))
            return mazo.filter(carta => numeroCarta.includes(carta.numero))
        else{
            return mazo.filter(carta => carta.numero === numeroCarta)
        }
    }

    if(cantidadCartas != undefined)
        return mazo.slice(0, cantidadCartas);
    else
        throw "No se pueden extraer cartas"
}

const buscarCarta = (mazo, numeroCarta) => {
    return mazo.find(carta => carta.numero === numeroCarta)
}

const quitarCarta = (mazo, numeroCarta) => {
    return mazo.filter(carta => carta.numero !== numeroCarta)    
}

module.exports = {
    repartirMano: repartirMano,
    mezclar: mezclar,
    agarrarCarta: agarrarCarta,
    buscarCarta: buscarCarta,
    quitarCarta: quitarCarta
}