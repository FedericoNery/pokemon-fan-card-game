function isValidActualizacionDelMazo(idsCartas){
    var objetoConIdsDeCartas = {};
    idsCartas.forEach(function(i) { objetoConIdsDeCartas[i] = (objetoConIdsDeCartas[i]||0) + 1;});

    const propertyNames = Object.keys(objetoConIdsDeCartas);
    propertyNames.forEach(claveIdDeCarta => {
        var cantidadDeRepeticionesDeLaCarta = objetoConIdsDeCartas[claveIdDeCarta]
        if(cantidadDeRepeticionesDeLaCarta > 4){
            return false
        }
    });

    return true
}

function getCardIdOfError(idsCartas){
    var objetosConIdsDeCartas = {};
    idsCartas.forEach(function(i) { objetosConIdsDeCartas[i] = (objetosConIdsDeCartas[i]||0) + 1;});

    const propertyNames = Object.keys(objetosConIdsDeCartas);
    propertyNames.forEach(claveIdDeCarta => {
        var cantidadDeRepeticionesDeLaCarta = objetosConIdsDeCartas[claveIdDeCarta]
        if(cantidadDeRepeticionesDeLaCarta > 4){
            return claveIdDeCarta
        }
    });
}


module.exports = {
    isValidActualizacionDelMazo,
    getCardIdOfError
}