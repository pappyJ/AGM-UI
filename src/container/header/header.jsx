import React from "react";
import Ltxt from "../../constants/link";
import { DgText } from "../../constants/style";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TemporaryDrawer from "../drawer/drawer";
import { AppBar } from "@material-ui/core";
import { COMPANY_NAME } from "../../constants/appConstants";

const Linkk = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  @media only screen and (max-width: 700px) {
    padding: 0.5rem 0.5rem;
  }
`;
const Container = styled.div`
  background-color: #473bf0;
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
  @media only screen and (max-width: 905px) {
    display: none;
    padding: 0rem 1rem;
  }
`;

const Header = () => {
  return (
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
  );
};

export default Header;
