import React from "react";
import Button from "@material-ui/core/Button";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import Viewer from "react-viewer";

import styled from "styled-components";
import { SmText } from "../../constants/style";
import { Link } from "react-router-dom";
// const rotate = keyframes`
// 	0% {
// 		background: white;
//   }
//   50%{
//     background: rgba(0, 3, 104, 0.351);
//   }
// 	100% {
// background: #fafafa;
// 	}
// `;
const Rotate = styled.div`
  &:hover {
   
  }
`;

const GryBtn = styled(Button)`
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: scale(1.01);
  }
`;

export  function Dialogs({ img }) {
  const [setVisible] = React.useState(false);
  return (
    <Rotate style={{ zIndex: "100" }}>
      <GryBtn
        onClick={() => {
          setVisible(true);
        }}
        color='primary'
      >
        <Rotate>
          <Link to='/gallery-view' style={{textDecoration: "none"}}>
            <Card>
              <CardMedia
                component='img'
                alt='our project'
                height='250'
                image={img}
                title='Our project'
                borderRaduis={2}
              />
              <CardContent>
                <SmText>wedding at odinegwe</SmText>
              </CardContent>
            </Card>
          </Link>
        </Rotate>
      </GryBtn>
    </Rotate>
  );
};
// with dialog
export  function DialogView({ img, about }) {
  const [visible, setVisible] = React.useState(false);
  return (
    <Rotate style={{ zIndex: "100" }}>
      <GryBtn
        onClick={() => {
          setVisible(true);
        }}
        color='primary'
      >
        <Rotate>
        
            <Card>
              <CardMedia
                component='img'
                alt='our project'
                height='250'
                image={img}
                title='Our project'
                borderRaduis={2}
              />
              <CardContent>
                <SmText>{about}</SmText>
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
        onMaskClick={() => {
          setVisible(false);
        }}
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
};