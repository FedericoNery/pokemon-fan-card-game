import { Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCartasEnergia } from '../../core/services/cartasEnergias';
import { getAllCartasPokemon } from '../../core/services/cartasPokemon';
import { getCartasDelMazoById, putCartasDelMazoById } from '../../core/services/mazos';
import { ContextToastContainer } from '../ui/toasts/ToastContainer';
import ExchangeCartas from './ExchangeCartas';

const ContainerEdicionDelMazo = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const toast = useContext(ContextToastContainer)

  const [cartasMazo, setCartasMazo] = useState([])
  const [cartasDisponibles, setCartasDisponibles] = useState([])

  useEffect(async () => {
    setIsLoading(true)
    const res = await getCartasDelMazoById(id)
    const resCartasPokemon = await getAllCartasPokemon()
    const resCartasEnergia = await getAllCartasEnergia()
    let indices = 0

    setCartasMazo(res.data.map((x, index) => {
      const cartaConIndiceDraggeable = { ...x, idDraggeable: indices }
      indices += 1
      return cartaConIndiceDraggeable
    }))

    setCartasDisponibles([...resCartasPokemon.data, ...resCartasEnergia.data].map((x, index) => {
      const cartaConIndiceDraggeable = { ...x, idDraggeable: indices }
      indices += 1
      return cartaConIndiceDraggeable
    }))

    setIsLoading(false)
    return () => { }
  }, [])

  const actualizarMazo = async (idMazo, listaDeCartas) => {
    try {
      await putCartasDelMazoById(idMazo, listaDeCartas.map(x => x.numero))
      toast.success("Editó el mazo correctamente")
    }
    catch (error) {
      toast.error(`Ocurrió un error al editar el mazo ${error.toString()}`)
    }
  }

  return !isLoading && <>

    <Typography variant="h3" gutterBottom align='center' sx={{ marginTop: 5 }}>
      Editar mazo
    </Typography>
    <ExchangeCartas cartasDisponibles={cartasDisponibles} cartasMazo={cartasMazo}
      actualizarMazo={actualizarMazo} />
  </>
}

export default ContainerEdicionDelMazo;
