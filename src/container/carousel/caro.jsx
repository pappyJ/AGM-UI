import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./caro.css";
import Slide1 from "./slide1";
import Slide2 from "./slide2";
import styled from "styled-components";
import { DgText, SmText } from "../../constants/style";
import Btn from "../../components/button/button";

//import { Typography } from "@material-ui/core";
//import { Link } from "react-router-dom";

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
              style={{  fontWeight: "400", fontSize: "4rem", color: '#fff' }}
            >
              Events and Deco
            </DgText>
          <SmText white>all i do is win and win no matter what!</SmText>
          <Btn value='ORDER OUR SERVIVCE' big/>
        </HeadTitle>
      </Text>
      <Carou
        autoPlay
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        infiniteLoop
       
        swipeable={false}
      >
        <Slide1 key='content-0' />
        <Slide2 key='content-1' />

        <Slide1 key='content-2' />
      </Carou>
    </Container>
  );
};
