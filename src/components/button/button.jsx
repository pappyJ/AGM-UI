import React from "react";
import styled from "styled-components";
// background: ${(props) => (props.choco ? "none" : "#FCEA4A")};
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const CustomButton = styled.button`
  width: ${(props) => (props.big ? "max-content" : "max-content")};
  height: ${(props) => (props.big ? "min-content" : "max-content")};
  justify-self: ${(props) => (props.center ? "center" : "none")};
  padding: 0.7rem 1.5rem;
  margin: 1rem 0;
  color: #fff;

  border: none;
  cursor: pointer;
  font-family: Nunito Sans;
  background-color: #473bf0;
  font-weight: normal;
  font-size: ${(props) => (props.big ? "20px" : "1.2rem")};
  line-height: 30px;
  outline: none;

  border-radius: 10rem;

  @media only screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 13.5px;
    padding: 0.3rem 1.5rem;
  }

  &:hover {
    transform: translateY(-0.3px);
  }
`;

const Btn = ({ onClick, to, value, ...props }) => {
  return (
    <Container>
      <CustomButton onClick={onClick} to={to} {...props}>
        {value}
      </CustomButton>
    </Container>
  );
};

export default Btn;
