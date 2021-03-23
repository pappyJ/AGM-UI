import React from "react";
import Button from "@material-ui/core/Button";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import Viewer from "react-viewer";

import styled, {keyframes} from "styled-components";
import { SmText } from "../../constants/style";
const rotate =keyframes`
	0% {
		background: white;
  }
  50%{
    background: rgba(0, 3, 104, 0.351);
  }
	100% {
background: #fafafa;
	}
`
const Rotate = styled.div`

&:hover{
  animation: ${rotate} 2s linear ;

  }
`;

const GryBtn = styled(Button)`
&:hover{
  animation: ${rotate} 2s linear infinite;

  }
`


export default function Dialogs({ img }) {
  const [visible, setVisible] = React.useState(false);
  return (
     <Rotate style={{ zIndex: "100" }}>
     <GryBtn
       onClick={() => {
         setVisible(true);
       }}
       color="primary"
      
      >
        <Rotate>
          <Card>
            
      <CardMedia
          component="img"
          alt="our project"
          height="250"
          image={img}
            title="Our project"
            borderRaduis={2}
            />
            <CardContent>
              <SmText>wedding at odinegwe</SmText>
            </CardContent>
</Card>
        </Rotate>
      </GryBtn>
      
     <Viewer
       visible={visible}
       noFooter
       attribute
       downloadable
       disableMouseZoom
       zIndex={7000}
       onClose={() => {
         setVisible(false);
       }}
       images={[
         {
           src: `${img}` ,
           alt: "okigwe birhday ",
         },
       ]}
     />
   </Rotate>
  );
}
