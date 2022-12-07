import { Box } from "@mui/system";
import { getNumeroPokemon } from "../../../../utils/functions";


const ImagenPokemon = ({ numero, propsSx, nombre }) => {
    return <Box
    component="img"
    alt=""
    sx={{
      objectFit: "contain",
      margin: "auto",
      display: "block",
      ...propsSx
      //maxHeight: 140
    }}
    title={nombre}
    src={`../images/pokemons/${getNumeroPokemon(numero)}.png`}
  />
}

export default ImagenPokemon;
