import { Box } from "@mui/system";
import { getNumeroPokemon } from "../../../../utils/functions";


const ImagenPokemon = ({ numero, propsSx }) => {
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
    title="Contemplative Reptile"
    src={`../images/pokemons/${getNumeroPokemon(numero)}.png`}
  />
}
 
export default ImagenPokemon;