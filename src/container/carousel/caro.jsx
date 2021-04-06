import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './caro.css';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';
import styled, { keyframes } from 'styled-components';
import { DgText, MdText } from '../../constants/style';
import Btn from '../../components/button/button';
import { COMPANY_NAME, COMPANY_SLOGAN } from '../../constants/appConstants';

//import { Typography } from "@material-ui/core";
//import { Link } from "react-router-dom";
const scale = keyframes`
from {
  opacity: 0;
  transform: scale(0);
}
	to {
    opacity: 1;
    transform: scale(1);
	}
  `;
const Container = styled.div`
  background: #192734;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  //clip-path: polygon(50% 10%, 60% 0, 100% 0, 100% 70%, 100% 100%, 50% 100%, 21% 100%, 0 100%, 0 0, 40% 0);
  @media only screen and (max-width: 602px) {
  }
`;
const Text = styled.div`
  grid-row: 1/2;
  grid-column: 1/-1;
  z-index: 1000;
  display: grid;
  grid-template-columns: 1fr;
  //align-items: center;
  //justify-items: center;
  font-size: 5rem;
  color: white;
  animation: ${scale} 1s ease;
  @media only screen and (max-width: 602px) {
  }
`;
const HeadTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 2rem;
  @media only screen and (max-width: 602px) {
  }
`;

const Carou = styled(Carousel)`
  grid-row: 1/2;
  grid-column: 1/-1;
  z-index: 1;
`;

export const Caro = () => {
  return (
    <Container>
      <Text>
        <HeadTitle>
          <DgText
            style={{
              textAlign: 'center',
              fontWeight: '400',
              fontSize: '4rem',
              color: '#fff',
            }}
          >
            {COMPANY_NAME}
          </DgText>
          <MdText white>{COMPANY_SLOGAN}</MdText>
          <Btn value='ORDER OUR SERVIVCE' big />
        </HeadTitle>
      </Text>
      <Carou
        autoPlay
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        infiniteLoop
        swipeable={false}
      >
        <Slide1 key='content-0' />

        <Slide2 key='content-1' />

        <Slide3 key='content-2' />
      </Carou>
    </Container>
  );
};
