import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PartidasGanadas = ({ cantidad }) => {
  return (
    <Card sx={{
      minWidth: 275,
    }}>
      <CardContent>
        <Typography sx={{
          fontSize: 14,
        }} color="textSecondary" gutterBottom>
          Partidas ganadas
        </Typography>
        <Typography variant="h2" component="h1">
          {cantidad}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PartidasGanadas
