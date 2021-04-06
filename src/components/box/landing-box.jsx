
import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/banners/bannerb.jpg";
import { LgText, SmText } from "../../constants/style";
import styled from "styled-components";

const Container = styled.div`
  background-image: url(${Img});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  height: 50vh;
`;

const Bg = styled.div`
  height: 50vh;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: min-content min-content;
  justify-content: center;
  justify-items: center;
  align-content: center;
  padding: 1rem;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
`;
const Links = styled.div`
display: grid;
grid-template-columns: repeat(3,max-content);
grid-gap: .4rem;
align-items: center;
`;

const LandingBox = ({ title, currentPage, linkto }) => {
  return (
    <Container>
      <Bg>
        <LgText white>{title}</LgText>
        <Links>
          <LinkTo to=''>
            <SmText white bold>
              Home 
            </SmText>
          </LinkTo>
          <SmText white bold>
             /
            </SmText>
          <LinkTo to={`/${linkto}`}>
            <SmText white>{currentPage}</SmText>
          </LinkTo>
        </Links>
      </Bg>
    </Container>
  );
};

export default LandingBox;