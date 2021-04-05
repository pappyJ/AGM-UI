import React, {useState} from 'react';
import styled, {css} from "styled-components";

import RiseLoader from "react-spinners/RiseLoader";

const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
align-items: center;
width: 100%;
height:100vh;
background: #473bf0;
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
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoaderBox = () => {
  let [color] = useState("#fff");

    return (
        <Container>
              
         <RiseLoader color={color} loading={true} css={override} size={15} />
  
        </Container>
    );
};

export default LoaderBox;