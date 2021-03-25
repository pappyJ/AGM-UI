import React from "react";
import styled from "styled-components";
import { MdText, SmText } from "../../constants/style";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 4.5rem 0.7rem;
  background: #473bf0;
  grid-gap: 0.8rem;
  border-radius: 5px;
  position: relative;
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover {
    transform: scale(1.02);
    background-color: black;
    z-index: 1000;
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

const Plans = ({ plan, info }) => {
  return (
    <Container>
      <MdText white>{plan}</MdText>
      <Div></Div>
      <SmText white>{info}</SmText>
    </Container>
  );
};

export default Plans;
