import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

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
        <Box
          sx={{
            '& > legend': { mt: 2 },
          }}
        >
          <Typography component="p">Rondas ganadas</Typography>
          <StyledRating
            name="customized-color"
            readOnly
            value={cantidad}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            max={2}
          />
        </Box>
      ); 
}
 
export default ContadorRondasGanadas;