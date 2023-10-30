import { Typography } from "@mui/material";

const Precio = ({ precio }) => {
  return <Typography variant="body2" color="textSecondary" component="p" align="left">
        Precio: {precio}
      </Typography>
}

export default Precio;