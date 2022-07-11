import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import styled from "styled-components";
import { red } from "./constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const PokeballTop = styled.div`
  background: ${red};
  width: 100%;
  height: 50%;
  border-bottom: 40px solid black;
  position: relative;
  z-index: 3;

  &::before {
    content: "";
    position: absolute;
    top: -90px;
    width: 100%;
    height: 100px;
    background: ${red};
  }
`

const PokeballBottom = styled(PokeballTop)`
  border-top: 40px solid black;
  border-bottom: none;
  z-index: 2;

  &::before {
    top: unset;
    bottom: -90px;
  }
`

const Button = styled.div`
  width: 350px;
  height: 350px;
  background: white;
  border: 50px solid black;
  position: absolute;
  top: calc(100% - 150px);
  left: calc(50% - 175px);
  border-radius: 50%;
  z-index: 3;
`

const Pokeball = ({isAnimated, start, end}) => {
  const frame = useCurrentFrame();
  const openStart = start ? start : 0;
  const openEnd = end ? end : 10;

  const openPokeballTop = interpolate(frame, [openStart, openEnd], [0, -700], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.back(1),
  })
  const openPokeballBottom = interpolate(frame, [openStart, openEnd], [0, 700], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.back(1),
  })

  return (
    <AbsoluteFill>
      {
        isAnimated ?
          <Container>
            <PokeballTop style={{ transform: `translateY(${openPokeballTop}px)` }}>
              <Button />
            </PokeballTop>
            <PokeballBottom style={{ transform: `translateY(${openPokeballBottom}px)` }} />
          </Container>
        :
        <Container>
          <PokeballTop>
            <Button />
          </PokeballTop>
          <PokeballBottom />
        </Container>
      }
    </AbsoluteFill>
  )
}

export default Pokeball;