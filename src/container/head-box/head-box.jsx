import React from 'react';
import { BgText, SmText } from '../../constants/style';
import styled, {keyframes} from "styled-components";
//import { LgText } from "../../constants/style";
const Container = styled.div`
padding: 3rem 0rem;
margin-top: 3rem;
display: grid;
grid-template-columns: 1fr;
justify-items: center;
align-content: center;
`;
const blur =keyframes`
0% {
  opacity: 0;
}
40% {
  transform: scale(1);
	}
	100% {
    opacity: 1;
	}
  `
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
  animation: ${blur} 4s linear ;
  @media only screen and (max-width: 802px) {
    width: 80vw;
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
    background-color: #333333;
    animation: ${blur} 4s linear ;
  }
`;

const HeadBox = ({section, title, color}) => {
    return (
        <Container>
            <Content>
                <SmText color={color} capital>{section}</SmText>
                <BgText center bold>{title}</BgText>
        </Content>
        <Div></Div>
        </Container>
    );
};

export default HeadBox;