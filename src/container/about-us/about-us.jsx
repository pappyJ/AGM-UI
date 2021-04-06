import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Btn from '../../components/button/button';
import { LgText, MdText, SmText } from '../../constants/style';
import Img from '../../images/abt.jpg';
//import { LgText } from "../../constants/style";

const Container = styled.div`
  margin-top: 2rem;
`;
const Image = styled.img`
  height: 80vh;
  width: 100%;
`;
const ImageBox = styled.div`
  grid-row: 1/2;
  grid-column: 1/-1;
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
  grid-gap: 4rem;
  padding: 0 1rem;
`;
const Bg = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  display: grid;
  grid-template-columns: 1fr;

  &::after,
  &::before {
    content: ''; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.3);
    opacity: 0.7;
  }
`;
const Buttons = styled.div`
display: grid;
grid-template-columns: repeat(3, max-content);
align-items: center;
grid-gap: .8rem;
`;
const AboutUs = () => {
  return (
    <Container>
      <Bg>
        <Text>
          <MdText white bold>
            BOOK TODAY!
          </MdText>
          <LgText white style={{ zIndex: '100', textAlign: 'center' }}>
            Book Your Tasting Session or <br />
            Discuss Your Project
          </LgText>
          <Buttons>
            <Link to='/contact' style={{ textDecoration: "none"}}>
              <Btn value='BOOK US' />
            </Link>
            <SmText white >OR</SmText>
            <Link to='/rental' style={{ textDecoration: "none"}}>
              <Btn value='RENT' />
            </Link>
          </Buttons>
        </Text>
        <ImageBox>
          <Image src={Img} title='service' />
        </ImageBox>
      </Bg>
    </Container>
  );
};

export default AboutUs;
