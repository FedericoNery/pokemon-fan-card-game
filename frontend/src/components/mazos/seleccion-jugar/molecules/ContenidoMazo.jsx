import React from 'react'
import NombreMazo from '../atoms/NombreMazo';
import NumeroMazoCantidadCartasMazo from './NumeroMazoCantidadCartasMazo';

const ContenidoMazo = ({ nombreMazo, numeroMazo, cantidadCartasMazo }) => {
    return <>
        <NombreMazo nombre={nombreMazo} />
        <NumeroMazoCantidadCartasMazo numeroMazo={numeroMazo} cantidadCartasMazo={cantidadCartasMazo}/>
    </>
}

export default ContenidoMazo;