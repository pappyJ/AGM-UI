import React from 'react';
import { Divider } from '@material-ui/core';
import LandingBox from '../../components/box/landing-box';
import { Lg } from '../../components/box/pages-box';
import HeadBox from '../../container/head-box/head-box';
import styled from 'styled-components';
import ContactBox from '../../components/contact-box/contact-box';
import img1 from '../../images/gowns/gown1.jpeg';
import img2 from '../../images/gowns/gown2.jpeg';
import img3 from '../../images/gowns/gown3.jpeg';
import img4 from '../../images/gowns/gown4.jpeg';
import img5 from '../../images/gowns/gown5.jpeg';
import img6 from '../../images/gowns/gown6.jpeg';
import { DialogView } from '../../container/template/images-dialog';
import { MdText } from '../../constants/style';
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;
const Images = styled.div`
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
const Rental = () => {
  return (
    <Container>
      <LandingBox title='Rental' to='Rental' currentPage='Rental' />
      <HeadBox
        section='Rental'
        title='Welcome to the Best
Rental Service'
      />
      <MdText style={{ padding: '.5rem 1rem' }}>
        With Sample Catering Services, you’ll never be left searching for a
        vendor to provide equipment or services for your event. We’ve worked
        with the finest in the industry and will take care of all the details so
        you can avoid the hassle of managing multiple providers. Unique rentals
        can infuse any event with personality and character! . we own a standard
        inventory of beautiful tables, a variety of event chairs, portable bars,
        complete service ware, mobile kitchen equipment and more. In addition,
        our relationships with rental companies throughout Nigeria significantly
        expand our offerings so we always have just what you’re looking for.
        Rentals Include: Tenting, tables, seating, flatware, glassware, linens,
        florals, furniture, gowns, props. Terms & Conditions Applied
      </MdText>

      <Divider />

      <Lg>Our Collections</Lg>
      <Images>
        <DialogView img={img1} about='No:1' />
        <DialogView img={img2} about='No:2' />
        <DialogView img={img3} about='No3' />
        <DialogView img={img4} about='No4' />
        <DialogView img={img5} about='No5' />
        <DialogView img={img6} about='No6' />
      </Images>
      <ContactBox category={'Rental'} />
    </Container>
  );
};

export default Rental;
