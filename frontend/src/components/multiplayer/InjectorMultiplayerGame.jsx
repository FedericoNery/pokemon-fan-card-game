import { useJuego } from "../../hooks/useJuego";
import MultiplayerGame from "./MultiplayerGame";

const InyectorMultiplayerGame = () => {
  const { juego, setJuego } = useJuego()
  return juego !== null && <MultiplayerGame juego={juego} />
}

export default InyectorMultiplayerGame;
