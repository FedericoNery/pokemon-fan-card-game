import ImagenPokemon from "../../cartas/carta-pokemon/atoms/ImagenPokemon";

const ImagenPokemonReducida = ({numero, nombre}) => {
    return <ImagenPokemon numero={numero} propsSx={{ width: "100px", height: "100px" }} nombre={nombre}/>
}

export default ImagenPokemonReducida;
