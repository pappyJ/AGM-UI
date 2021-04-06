import React from "react";
import Ltxt from "../../constants/link";
import { DgText } from "../../constants/style";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import TemporaryDrawer from "../drawer/drawer";
import { AppBar } from "@material-ui/core";
import { COMPANY_NAME } from "../../constants/appConstants";
import ScrollToColor01 from "./scroll";

const blur =keyframes`
0% {
  opacity: 0;
  transform: translateX(-12rem);
}
40% {
  transform: scale(1);
	}
	100% {
    opacity: 1;
    transform: translateX(0);
	}
  `
  const right =keyframes`
from {
  opacity: 0;
  transform: translateX(12rem);
}
	to {
    opacity: 1;
    transform: translateX(0);
	}
  `

const Linkk = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  animation: ${blur} 1s ease-in ;
  @media only screen and (max-width: 700px) {
    padding: 0.5rem 0.5rem;
  }
`;
const Container = styled.div`
 // background-color: #473bf0;
  text-decoration: none;
  margin-bottom: 0rem;
  padding: 0.7rem 3rem;
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 700px) {
    padding: 0rem 1rem;
  }
`;
const Navs = styled.div`
  display: grid;
  grid-template-columns: repeat(7, max-content);
  justify-content: space-between;
  grid-gap: 1.5rem;
  animation: ${right} 1s ease-in ;
  @media only screen and (max-width: 905px) {
    display: none;
    padding: 0rem 1rem;
  }
`;

const Header = () => {
  return (
    <ScrollToColor01> 
    <AppBar>
      <Container>
        <Linkk to="/">
          <DgText center style={{ fontWeight: "500", color: "#fff" }}>
            {COMPANY_NAME}
          </DgText>
        </Linkk>
        <Navs>
          <Ltxt to="/" name="Home" />
          <Ltxt to="/catering" name="Catering" />
          <Ltxt to="/decoration" name="Decoration" />
          <Ltxt to="/training" name="Training" />
          <Ltxt to="/gallery" name="Gallery" />
          <Ltxt to="/contact" name="Contact Us" />
        </Navs>
        <TemporaryDrawer />
      </Container>
      </AppBar>
      </ScrollToColor01>
  );
};

export default Header;
