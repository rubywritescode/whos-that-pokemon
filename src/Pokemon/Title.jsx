import { useCurrentFrame, interpolate, Easing } from "remotion";
import styled from "styled-components";
import { red } from "./constants";

const StyledTitle = styled.h1`
  margin: 0;
  padding: 10px 0;
  width: 90%;
  font-size: 90px;
  text-align: center;
  line-height: 1.3;
  color: ${red};
  background: white;
  border-radius: 16px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
  position: absolute;
  top: calc(50% - 117px);
  left: calc(50% - 486px);
`

const Title = () => {
  const frame = useCurrentFrame();
  const startTitleSlide = 50
  const endTitleSlide = startTitleSlide + 10

  const titleSlide = interpolate(frame, [startTitleSlide, endTitleSlide], [0, 700], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.elastic(1.2),
  })

  const titleZIndex = interpolate(frame, [startTitleSlide, startTitleSlide + 3], [1, 3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  return (
    <StyledTitle style={{transform: `translateY(${titleSlide}px)`, zIndex: `${titleZIndex}`}}>
      Who's that Pokémon?
    </StyledTitle>
  )
}

export default Title;