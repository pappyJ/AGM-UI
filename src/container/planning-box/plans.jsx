import React from "react";
import styled from "styled-components";
import { MdText, SmText } from "../../constants/style";
import AdjustIcon from "@material-ui/icons/Adjust";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
//import "./style.css"
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 0.5rem 0.4rem;
  background-color: #004777;
// background: -webkit-linear-gradient(to top, #F7B53B, #004777 );  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to bottom , #F7B53B, #004777 90%); 
  grid-gap: 0.8rem;
  border-radius: 5px;
  position: relative;
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  // &:hover {
  //   transform: scale(1.02);
  //         background-color: red;
  //   z-index: 1000;  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 1rem 0.7rem;
  grid-gap: 0.8rem;
  border-radius: 5px;
  position: relative;
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  // &:hover {
  //   transform: scale(1.02);
  //         background-color: red;
  //   z-index: 1000;  }
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

    ${Container}:hover & {
      background-color: orange;
    }
  }
`;
const Ajust = styled(AdjustIcon)`
  justify-self: start;
  color: white;
  ${Container}:hover & {
    color: orange;
  }
`;
const Ajustt = styled(AdjustIcon)`
  justify-self: end;
  color: white;
  ${Container}:hover & {
    color: orange;
  }
`;
const Icon = styled(EmojiNatureIcon)`
  color: white;
  ${Container}:hover & {
    color: orange;
  }
`;
const Md = styled(MdText)`
${Container}:hover & {
  color: orange;
}`

const Plans = ({ plan, info }) => {
  return (
    <Container>
      <Ajust style={{ fontSize: "1rem" }} />
      <Content>
        <Icon style={{ fontSize: "3rem" }} />
        <Md white>{plan}</Md>
        <Div></Div>
        <SmText white>{info}</SmText>
      </Content>
      <Ajustt style={{ fontSize: "1rem" }} />
    </Container>
  );
};

export default Plans;
