import React from "react";
import { DgText } from "../../constants/style";

//import { LgText } from "../../constants/style";

import { Container, Content, Content1, Content2, Text, Text1, Text2, ImageBox, Bg, Image} from "./style";
import Img from "../../images/ft.jpg";
import Img1 from "../../images/ftt.jpg";
import Img2 from "../../images/fttt.jpg";
        
        


const Box = ({ image, offer }) => {
  return (
    <Container>
      <Content>
        <Bg>
          <Text>
            <DgText white bold style={{ zIndex: "100" ,justifySelf: "end", padding: "0 .6rem"}}>
              Rice
            </DgText>
          </Text>
          <ImageBox>
            <Image src={Img} title='service' />
          </ImageBox>
        </Bg>
      </Content>
      <Content1>
        <Bg>
          <Text1>
            <DgText white bold style={{ zIndex: "100" }}>
              {offer}
            </DgText>
          </Text1>
          <ImageBox>
            <Image src={Img1} title='service' />
          </ImageBox>
        </Bg>
      </Content1>
      <Content2>
        <Bg>
          <Text2>
            <DgText white bold style={{ zIndex: "100" }}>
              {offer}
            </DgText>
          </Text2>
          <ImageBox>
            <Image src={Img2} title='service' />
          </ImageBox>
        </Bg>
      </Content2>
    </Container>
  );
};

export default Box;
