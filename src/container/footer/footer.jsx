import React from "react";
import {  DgText, SmText } from "../../constants/style";
import styled from "styled-components";
import fb from "../../images/fb.svg";
import insta from "../../images/insta.svg";
import wave from "../../images/wave.svg";

const Foot = styled.div`
  background-image: url(${wave});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3rem 3rem 0rem;
`;

const Container = styled.div`
  padding: 3rem 0rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center;
  grid-gap: 2rem;
`;
const Content = styled.div`
  background-image: url("http://royalevent.themerex.net/wp-content/uploads/2020/11/title_bg_green.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: auto;
  min-height: 7rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center;
  width: 30vw;
  @media only screen and (max-width: 802px) {
    width: 50vw;
  }
`;
const Legal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 1rem;
  justify-self: center;
  @media only screen and (max-width: 602px) {
  }
`;
const Div = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  &::before {
    content: "";
    height: 2px;
    width: 6rem;
    position: absolute;
    background-color: #fff;
  }
`;

const SocialIcon = styled.img`
  height: 30px;
`;
const SocialLink = styled.a``;
const Footer = () => {
  return (
    <Foot>
      <Container>
        <div>
          <Content>
            <DgText center bold style={{ fontSize: "2rem", color: "#fff" }}>
              Event
            </DgText>
            <DgText center bold style={{ fontSize: "2rem", color: "#fff" }}>
              &
            </DgText>
            <DgText center bold style={{ fontSize: "2rem", color: "#fff" }}>
              Deco
            </DgText>
          </Content>
          <Div></Div>
        </div>
        <Legal>
          <SocialLink href='L'>
            <SocialIcon src={fb} />
          </SocialLink>
          <SocialLink href='L'>
            <SocialIcon src={insta} />
          </SocialLink>
        </Legal>
        <SmText white> © 2021 Events % Deco all rights reserved</SmText>
      </Container>
    </Foot>
  );
};

export default Footer;
