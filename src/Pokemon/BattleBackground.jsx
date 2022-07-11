import { AbsoluteFill } from "remotion";
import styled from "styled-components";
import image from "./assets/poke-bg.png";
import burst from "./assets/poke-burst.jpeg";

const Container = styled(AbsoluteFill)`
  background-image: url(${burst});
  background-size: 250% auto;
  background-repeat: no-repeat;
  background-position: -200px 260px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BattleBackground = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default BattleBackground