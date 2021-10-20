import { Typography } from '@mui/material';
import React from 'react'

const Tipo = ({ tipo_energia }) => {
    return <Typography variant="body2" color="textSecondary" component="p" align="left">
        Tipo: {tipo_energia}
    </Typography>
}

export default Tipo;