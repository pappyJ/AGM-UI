import React from 'react';
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
align-items: center;
width: 100%;
height:100vh;
background: #fff;
position: relative;


&::after, &::before {
  content: " ";
  display: block;
  position: absolute;
  width: 100%;
  height:100vh;
  background: rgba(0,0,0,.5);
  opacity: 0;
}
`;


const LoaderBox = () => {
    return (
        <Container>
              <Loader
        type="Rings"
        color="#473bf0"
        height={100}
        width={100}
       
      />
        </Container>
    );
};

export default LoaderBox;