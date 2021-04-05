import React from 'react';
import styled from 'styled-components';
import Img from '../../images/events/event10.jpeg';
//import { LgText } from "../../constants/style";

const Container = styled.div`
  background-image: url('https://rentyourhall.com/upload/hall/IMG_20160609_110705_copy.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //clip-path: polygon(50% 10%, 70% 0, 100% 0, 100% 70%, 100% 100%, 50% 100%, 21% 100%, 0 100%, 0 0, 30% 0);
`;

const Content = styled.div`
  height: 90vh;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
`;

// const Text = styled.h2`
//  font-size: 5rem;
//  color: white;
// `;

const Slide1 = () => {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
};

export default Slide1;
