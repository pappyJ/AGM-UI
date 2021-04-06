import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';

import { Link, NavLink } from 'react-router-dom';

import { LgText } from '../../constants/style';
const Container = styled.div`
  //background: #192734;
  @media only screen and (max-width: 602px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    padding: 0rem 0rem;
  }
`;

const Linkk = styled(NavLink)`
  color: #473bf0;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? 'bold' : '400')};
  font-size: 3rem;
  line-height: 22px;
  cursor: pointer;
  padding: 0.8rem 1rem;
  display: grid;
  grid-template-columns: 1fr;

  justify-items: center;
  @media only screen and (max-width: 900px) {
    font-size: 1.2rem;
    line-height: 22px;
  }

  &:hover {
    color: #fd7e14;
  }
`;
const LinkHome = styled(Link)`
  text-decoration: none;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color: #473bf0;
  background: -webkit-linear-gradient(#66a3e1, #473bf0);
  background: linear-gradient(#66a3e1, #473bf0);
`;

const ListItems = () => {
  return (
    <Container>
      <LinkHome to='/'>
        <LgText
          style={{
            color: 'orange',
            fontWeight: '900',
            fontSize: '1.6rem',
            fontFamily: 'Dancing Script, cursive',
          }}
        >
          Sample
          <br />
          Catering
          <br />
          Services
        </LgText>
      </LinkHome>
      <Divider />
      <Linkk to='/'>Home</Linkk>
      <Divider />
      <Linkk to='/catering'>Catering</Linkk>
      <Divider />
      <Linkk to='/decoration'>Decoration</Linkk>
      <Divider />
      <Linkk to='/rental'>Rental</Linkk>
      <Divider />
      <Linkk to='/training'>Training</Linkk>
      <Divider />
      <Linkk to='/contact'>Contact Us</Linkk>
      <Divider />
    </Container>
  );
};

export default ListItems;
