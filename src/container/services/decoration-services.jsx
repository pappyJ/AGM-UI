import React from "react";
import HeadBox from "../head-box/head-box";
import styled from "styled-components";
import Box from "../../components/box/box";
import Btn from "../../components/button/button";
import { MdText } from "../../constants/style";
import {Content} from "./catering-services"
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

  @media only screen and(max - width: 902px) {
      grid-gap: 1rem;
    }
`;

const DecoServices = () => {
  return (
    <Container>
      <HeadBox section='DECORATION' title='Welcome to the Best
Decoration Service' />
      <Content>
        <Box />
       <MdText style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
        consectetur nemo provident accusantium, cupiditate, quisquam maxime
        incidunt expedita ad omnis fugiat suscipit earum autem totam hic magni,
        iusto itaque?
      </MdText>
      </Content>
      <Btn value='DECORATION' center/>
    </Container>
  );
};

export default DecoServices;
