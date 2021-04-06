import React from "react";
import HeadBox from "../head-box/head-box";
import styled from "styled-components";
import Box from "../../components/box/box";
import { MdText } from "../../constants/style";
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
  @media only screen and (max-width: 902px) {
    grid-gap: 1rem;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 2rem 0;
  @media only screen and (max-width: 902px) {
    grid-template-columns: 1fr ;
  }
  `
const CateringServices = () => {
  return (
    <Container>
      <HeadBox
        section='CATERING'
        title='Welcome to the Best
Catering Service'
      />
      <Content>

      <MdText style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
        consectetur nemo provident accusantium, cupiditate, quisquam maxime
        incidunt expedita ad omnis fugiat suscipit earum autem totam hic magni,
        iusto itaque?
      </MdText>
     
        <Box/>
      
      </Content>
      <Btn value='CATERING' center />
    </Container>
  );
};

export default CateringServices;
