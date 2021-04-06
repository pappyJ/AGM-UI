import React from 'react';
import HeadBox from '../head-box/head-box';
import styled from 'styled-components';
import Box from '../../components/box/box';
import Btn from '../../components/button/button';
import Img1 from '../../images/food/food5.jpeg';
import Img2 from '../../images/food/food2.jpeg';
import Img3 from '../../images/cakes/cake2.jpeg';
import { MdText } from '../../constants/style';
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
  @media only screen and (max-width: 902px) {
    grid-gap: 1rem;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 2rem 0;
  @media only screen and (max-width: 1002px) {
    grid-template-columns: 1fr ;
  }
`;
const CateringServices = () => {
  return (
    <Container>
      <HeadBox
        section='CATERING'
        title='Welcome to the Best
Catering Service'
      />
      <Content>
        <MdText style={{ textAlign: 'center' }}>
          Sample Catering Services is the premier catering and events company of
          choice in Nigeria. We create remarkable experiences by offering the
          finest quality foods and providing unsurpassed personalized service,
          driven by our passion for life’s special occasions.
        </MdText>

        <Box
          image1={Img1}
          image2={Img2}
          image3={Img3}
          offer1='Snack'
          offer2='Food'
          offer3='Cake'
        />
      </Content>
      <Link to='/catering' style={{ textDecoration: 'none' }}>
        <Btn value={<ArrowRightAltIcon style={{ color: 'white' }} />} center />
      </Link>
    </Container>
  );
};

export default CateringServices;
