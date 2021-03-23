import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//import { SmText } from "./style";

const Linkk = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  font-size: 1.1rem;
  line-height: 22px;
  margin: 0 0.2rem;
  cursor: pointer;

  &:hover,
  &:active{
    border-bottom: solid 2px #fff;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.2rem;
    line-height: 22px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
const active = {};
const Ltxt = ({ to, name }) => {
  return (
    <Linkk to={to} activeStyle={active}>
      {name}
    </Linkk>
  );
};

export default Ltxt;
