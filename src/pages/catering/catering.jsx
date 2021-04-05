import React from 'react';
import { Divider } from '@material-ui/core';
import LandingBox from '../../components/box/landing-box';
import { PagesBox, RevPagesBox } from '../../components/box/pages-box';
import HeadBox from '../../container/head-box/head-box';
import ContactBox from '../../components/contact-box/contact-box';
import img from '../../images/bgg.jpg';
const Catering = () => {
  return (
    <div>
      <LandingBox title='CATERING' to='catering' currentPage='Catering' />
      <HeadBox
        section='CATERING'
        title='Welcome to the Best
Catering Service'
      />
      <PagesBox
        title='ASSORTED DISHES'
        description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
        image={img}
        alt='catering department'
      />

      <Divider />

      <RevPagesBox
        title='SNACKS AND CONFECTIONERIES'
        description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
        image={img}
        alt='Decoration department'
      />

      <Divider />

      <PagesBox
        title='CAKES AND SANDWICHES'
        description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
        image={img}
        alt='catering department'
      />
      <ContactBox category={'catering'} />
    </div>
  );
};

export default Catering;
