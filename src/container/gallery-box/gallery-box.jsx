import React from 'react';
import img from '../../images/ft.jpg';
import img2 from '../../images/wp.png';
import img3 from '../../images/wpp.jpg';

import HeadBox from '../head-box/head-box';
import styled from 'styled-components';
import { Dialogs } from '../template/images-dialog';
import Btn from '../../components/button/button';
const Container = styled.div`
  padding: 2rem 0;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  grid-gap: 1.2rem;
  padding-bottom: 5rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const Imgvw = () => {
  return (
    <Container>
      <HeadBox
        section='gallery'
        title='Check Our Recent
Projects'
      />
      <Content>
        <Dialogs img={img3} />
        <Dialogs img={img} />

        <Dialogs img={img2} />

        <Dialogs img={img3} />
        <Dialogs img={img2} />
        <Dialogs img={img} />
      </Content>
      <Btn value='GALLERY' center />
    </Container>
  );
};

export default Imgvw;
