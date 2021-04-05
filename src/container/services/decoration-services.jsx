import React from 'react';
import HeadBox from '../head-box/head-box';
import styled from 'styled-components';
import Box from '../../components/box/box';
import Btn from '../../components/button/button';
import { MdText } from '../../constants/style';
import Image from '../../images/4k_Uhd_Motherboard_-9a2c0851-14b1-4f37-a9a0-27d9d955225f.jpg';
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
      <HeadBox
        section='DECORATION'
        title='Welcome to the Best
Decoration Service'
      />
      <MdText style={{ textAlign: 'center' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
        consectetur nemo provident accusantium, cupiditate, quisquam maxime
        incidunt expedita ad omnis fugiat suscipit earum autem totam hic magni,
        iusto itaque?
      </MdText>
      <Boxes>
        <Box
          image={
            'https://www.bellanaijaweddings.com/wp-content/uploads/2019/02/Amanda-Sydney-BellaNaija-Weddings-94-1080x1350.jpg'
          }
          offer='Marriages'
        />
        <Box
          image={
            'https://cdn.britannica.com/34/180534-131-42E31460/candles-cemetery-All-Saints-Day.jpg'
          }
          offer='Burials'
        />
        <Box
          image={
            'https://www.tori.ng/userfiles/thumb/2018/mar/19/bb/b_91502.jpg'
          }
          offer='Dedications'
        />
      </Boxes>
      <Btn value='DECORATION' center />
    </Container>
  );
};

export default DecoServices;
