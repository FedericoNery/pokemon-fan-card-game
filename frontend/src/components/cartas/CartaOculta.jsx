import { Box } from '@mui/system';
import React from 'react';

const CartaOculta = (props) => {

  return <Box
    component="img"
    alt=""
    sx={{
      /* objectFit: "contain", */
      margin: "auto",
      display: "block",
      maxHeight: 500,
      maxWidth: 220,
    }}
    title="Contemplative Reptile"
    src="./images/carta_back.png"
  />

}

export default CartaOculta
