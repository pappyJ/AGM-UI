import React from 'react';
import HeadBox from '../head-box/head-box';
import styled from 'styled-components';
import Box from '../../components/box/box';
import Btn from '../../components/button/button';
import { MdText } from '../../constants/style';

import Img1 from '../../images/events/events9.jpeg';
import Img2 from '../../images/events/event11.jpeg';
import Img3 from '../../images/events/event12.jpeg';
import { Content } from './catering-services';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';
//import { LgText } from "../../constants/style";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem 5rem;
  grid-gap: 2.9rem;
  margin: 2rem 0;
  @media only screen and (max-width: 802px) {
    padding: 1rem 1rem;
  }

  @media only screen and(max - width: 1002px) {
      grid-gap: 1rem;
    }
`;

const DecoServices = () => {
  return (
    <Container>
      <HeadBox
        section='DECORATION'
        title='Welcome to the Best
Decoration Service'
      /> <Content>
      <MdText style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
          consectetur nemo provident accusantium, cupiditate, quisquam maxime
          incidunt expedita ad omnis fugiat suscipit earum autem totam hic magni,
          iusto itaque?
      </MdText>
      <Box
          image1={Img1}
          image2={Img2}
          image3={Img3}
          offer1="Meeting"
          offer2="Event"
          offer3="Wedding"
        />
      </Content>
      <Link to="/decoration" style={{textDecoration: "none"}}>
      <Btn value={<ArrowRightAltIcon style={{ color: "white" }}/>} center />
      </Link>
    </Container>
  );
};

export default DecoServices;
