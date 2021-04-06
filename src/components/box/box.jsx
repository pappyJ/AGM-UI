import React from "react";
import { DgText } from "../../constants/style";

//import { LgText } from "../../constants/style";

import { Container, Content, Content1, Content2, Text, Text1, Text2, ImageBox, Bg, Image} from "./style";

        
        


const Box = ({ image1, image2, image3, offer1 ,offer2, offer3 }) => {
  return (
    <Container>
      <Content>
        <Bg>
          <Text>
            <DgText white bold style={{ zIndex: "100" ,justifySelf: "end", padding: "0 .6rem"}}>
              {offer1}
            </DgText>
          </Text>
          <ImageBox>
            <Image src={image1} title='service' />
          </ImageBox>
        </Bg>
      </Content>
      <Content1>
        <Bg>
          <Text1>
            <DgText white bold style={{ zIndex: "100" ,justifySelf: "end", padding: "0 .6rem"}}>
              {offer2}
            </DgText>
          </Text1>
          <ImageBox>
            <Image src={image2} title='service' />
          </ImageBox>
        </Bg>
      </Content1>
      <Content2>
        <Bg>
          <Text2>
            <DgText white bold style={{ zIndex: "100" ,justifySelf: "end", padding: "0 .6rem"}}>
              {offer3}
            </DgText>
          </Text2>
          <ImageBox>
            <Image src={image3} title='service' />
          </ImageBox>
        </Bg>
      </Content2>
    </Container>
  );
};

export default Box;
