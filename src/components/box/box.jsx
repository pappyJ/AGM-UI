
import React from "react";
import styled, {keyframes}  from "styled-components";
import { DgText } from "../../constants/style";

//import { LgText } from "../../constants/style";

const Container = styled.div`
border-radius: 5px;
  overflow: hidden;`

const rotate =keyframes`
0% {
  transform: scale(1.05);
}
40% {
  transform: scale(1);
	}
	100% {
    transform: scale(1.05);
	}
  `
  const Image = styled.img`
    height: 60vh;
    width: 100%;
    border-radius: 5px;
    animation: ${rotate} 4s linear infinite;
    &:hover {
    animation : none;
  }
  `;
const ImageBox = styled.div`
  grid-row: 1/2;
  grid-column: 1/-1;
  border-radius: 5px;
`;
const Text = styled.div`
  grid-row: 1/2;
  grid-column: 1/-1;
  z-index: 10;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center;
  border-radius: 5px;
  transition: all .6s cubic-bezier(.17,.67,.83,.67);
  &:hover {
    align-content: end;
  }
`;
const Bg = styled.div`
height: 60vh;
width: 100%;
border-radius: 5px;
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
transition: all 12s ease-out;
  &::after,
  &::before {
    content: ""; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    height: 60vh;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.3);
    opacity: 0.7;
    transition: all .2s ease-out;
  }
  &:hover {
    &::after,
    &::before {
      display: none;
    }

    
  }
`;
const Box = ({image, offer}) => {
  return (
    <Container>
      <Bg>
        <Text>
          <DgText white bold style={{ zIndex: "100" }}>
            {offer}
          </DgText>
        </Text>
        <ImageBox>
          <Image src={image} title='service' />
        </ImageBox>
      </Bg>
    </Container>
  );
};

export default Box;