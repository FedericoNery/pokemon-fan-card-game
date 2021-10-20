import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SimpleCard = (props) => {

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
          10
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SimpleCard
