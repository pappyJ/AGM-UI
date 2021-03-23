import React from "react";
import HeadBox from "../head-box/head-box";
import styled from "styled-components";
import Box from "../../components/box/box";
import Btn from "../../components/button/button";
//import { LgText } from "../../constants/style";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem 5rem;
  grid-gap: 2.9rem;
    margin: 2rem 0;
  @media only screen and (max-width: 802px) {
    padding: 1rem 1rem;
  }
`;
const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 25vw);
  justify-content: space-between;
  align-content: center;

  @media only screen and (max-width: 802px) {
    grid-template-columns: repeat(3, 30vw);
  }
  @media only screen and (max-width: 602px) {
    grid-template-columns: 1fr;
    grid-gap: 2.9rem;
  }
`;
const DecoServices = () => {
  return (
    <Container>
      <HeadBox section='DECORATION' title='Welcome to the Best
Decoration Service' />
      <Boxes>
        <Box />
        <Box />
        <Box />
      </Boxes>
      <Btn value='DECORATION' center/>
    </Container>
  );
};

export default DecoServices;
