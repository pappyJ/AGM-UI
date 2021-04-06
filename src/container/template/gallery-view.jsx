import React from 'react';
import { DialogView } from './images-dialog';
import styled from 'styled-components';
import img from '../../images/ft.jpg';
import HeadBox from '../head-box/head-box';
import LandingBox from '../../components/box/landing-box';
// const rotate =keyframes`
// 	0% {
// 		filter: grayscale(.8);
// 	}
// 	40% {
// 		filter: grayscale(.5);
// 	}
// 	100% {
// 		filter: grayscale(0);
// 	}
// `
// const Rotate = styled.div`
//   animation: ${rotate} 2s linear infinite;
// `;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  grid-gap: 1.2rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const GalleryView = () => {
  return (
    <div>
      <LandingBox title='Gallery' to='/' currentPage='Home' />
      <HeadBox
        section='Gallery'
        title='Series pictures from this work'
      />
      <Container>
        <DialogView img={img} about='cooking for the wedding' />
        <DialogView img={img} about='cooking for the wedding' />
        <DialogView img={img} about='cooking for the wedding' />
      </Container>
    </div>
  );
};

export default GalleryView;
