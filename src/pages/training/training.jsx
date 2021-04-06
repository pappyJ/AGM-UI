import React from 'react';
import LandingBox from '../../components/box/landing-box';
import { Divider } from '@material-ui/core';
import { PagesBox, RevPagesBox } from '../../components/box/pages-box';
import HeadBox from '../../container/head-box/head-box';
import TrainingBox from '../../components/contact-box/contact-training';
import img from '../../images/bgg.jpg';
const Training = () => {
  return (
    <div>
      <LandingBox title='Training' to='Training' currentPage='Training' />
      <HeadBox
        section='Guide'
        title='Welcome to the Best
Training Service'
      />
      <PagesBox
        title='Event Pro'
        description='lorem how are uo doing yes'
        image={img}
        alt='Training department'
      />

      <Divider />

      <RevPagesBox
        title='Event & Catering'
        description='lorem how are uo doing yes'
        image={img}
        alt='Training department'
      />

      <PagesBox
        title='Complete Event Planner'
        description='lorem how are uo doing yes'
        image={img}
        alt='Training department'
      />
      <TrainingBox />
    </div>
  );
};

export default Training;
