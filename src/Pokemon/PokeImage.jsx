import { Img, useCurrentFrame, interpolate, Easing } from "remotion";
import styled from "styled-components";

const StyledImg = styled(Img)`
  display: block;
  width: 100%;
  padding: 0 100px;
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
  /* position: absolute;
  top: 50%;
  left: calc(50% - 540px); */
`

const PositionedImg = styled(StyledImg)`
  position: absolute;
  top: calc(50% - 516px);
  left: calc(50% - 540px);
  opacity: 0;
`

const PokeImage = ({imagePath, silhouette, zIndex = 0, opacity}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [70, 90], [0.95, 1.05], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.elastic(2),
  })

  const fadeIn = interpolate(frame, [120, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })


  return (
    <>
      {
        silhouette ?
          <StyledImg src={imagePath} zIndex={zIndex} opacity={opacity} style={{transform: `scale(${scale})`}} />
        :
          <PositionedImg src={imagePath} zIndex={zIndex} style={{ 
            transform: `scale(${scale})`,
            opacity: `${fadeIn}` }} 
          />
      }
    </>
  )
}

export default PokeImage