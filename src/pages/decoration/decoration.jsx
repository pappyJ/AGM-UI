import React from 'react';
import { Divider } from '@material-ui/core';
import LandingBox from '../../components/box/landing-box';
import { PagesBox, RevPagesBox } from '../../components/box/pages-box';
import HeadBox from '../../container/head-box/head-box';
import ContactBox from '../../components/contact-box/contact-box';
import img from '../../images/bgg.jpg';
//import img1 from '../../images/white/wh4.jpg';
const Decoration = () => {
  return (
    <div
    //   style={{
    //   backgroundImage: `url(${img1})`
    // }}
    >
      <LandingBox title='DECORATION' to='decoration' currentPage='Decoration' />
      <HeadBox
        section='DECORATION'
        title='Welcome to the Best
Decoration Service'
      />
      <PagesBox
        title='WEDDINGS'
        description='lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes'
        image={img}
        alt='Decoration department'
      />
      <Divider />
      <RevPagesBox
        title='COPORATE EVENTS'
        description='lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes'
        image={img}
        alt='Decoration department'
      />
      <Divider />
      <PagesBox
        title='FUNERAL EVENTS'
        description='lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes'
        image={img}
        alt='Decoration department'
      />
      <Divider />
      <RevPagesBox
        title='SOCIAL EVENTS &amp; LOTS MORE...'
        description='lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes'
        image={img}
        alt='Decoration department'
      />
      <ContactBox category={'decoration'} />
    </div>
  );
};

export default Decoration;
