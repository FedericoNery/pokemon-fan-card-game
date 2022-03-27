import ImagenPokemon from "../../cartas/carta-pokemon/atoms/ImagenPokemon";

const ImagenPokemonReducida = ({numero}) => {
    return <ImagenPokemon numero={numero} propsSx={{ width: "100px", height: "100px" }}/>
}
 
export default ImagenPokemonReducida;