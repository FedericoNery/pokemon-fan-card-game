import { Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import StarIcon from '../icons/StarIcon';
import StarIconGray from '../icons/StarIconGray';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const ContadorRondasGanadas = ({ cantidad }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Typography variant="overline">Rondas ganadas</Typography>
      </Grid>
      <Grid item>
      <StyledRating
        name="customized-color"
        readOnly
        value={cantidad}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        icon={<StarIcon fontSize="inherit" />}
        emptyIcon={<StarIconGray fontSize="inherit" />}
        max={2}
      />
      </Grid>
    </Grid>
  );
}

export default ContadorRondasGanadas;
