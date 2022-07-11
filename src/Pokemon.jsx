import { AbsoluteFill, Audio, Series } from "remotion";
import Pokeball from "./Pokemon/Pokeball";
import BattleBackground from "./Pokemon/BattleBackground";
import Title from "./Pokemon/Title";
import PokeImage from "./Pokemon/PokeImage";

import "./Pokemon/style.css";
import bgImage from "./Pokemon/assets/poke-bg.png";
import lipsSilhouette from "./Pokemon/assets/lips-silhouette.png";
import lipsColor from "./Pokemon/assets/lips-full-color.png";
import pokemonAudio from "./Pokemon/assets/poke-audio.mp3";
import wendyAudio from "./Pokemon/assets/wendy-audio.mp3";

const Pokemon = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={15} name="Static">
          <AbsoluteFill style={{ background: `${bgImage}` }}>
            <Pokeball />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={285} name="Open Ball">
          <Pokeball isAnimated />
          <BattleBackground>
            <Title />
            <PokeImage imagePath={lipsSilhouette} silhouette />
            <PokeImage imagePath={lipsColor} zIndex={1} />
          </BattleBackground>
        </Series.Sequence>
        <Series.Sequence durationInFrames={170} offset={-180} name="Wendy Audio">
          <Audio src={wendyAudio} volume={0.2} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={40} offset={-30} name="Pokemon Sting Audio">
          <Audio src={pokemonAudio} startFrom={105} endAt={180} />
        </Series.Sequence>
      </Series>
    
      {/* this audio is not connected to a specific sequence */}
      <Audio src={pokemonAudio} startFrom={0} />
    </>
  )
}

export default Pokemon;