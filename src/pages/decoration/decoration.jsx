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
        description='Planning a wedding can be a stressful and daunting task. You’ve got so many things to think about that it’s easy to get overwhelmed. That is, unless you find the right partner! sample  takes the burden of day-to-day management off your shoulders and frees you to focus on the fun parts. Your time is best spent touring exclusive Orange County wedding venues, selecting beautiful décor and unique rentals, and enjoying a private tasting of your full wedding day menu. When it comes to logistics, we’ve got it covered. A shorter to-do list means all you need to worry about is enjoying the experience. Your wedding should be the ultimate reflection of your personality. Small and quiet or big and loud? Formal and traditional or casual and trendy? We put you at the center of attention throughout the entire planning process and take the time to get to know you as an individual. What are your likes, dislikes and interests? Building a close relationship with your sample Catering + Event Specialist means you’ll be able to depend on someone who truly “gets” you.'
        image={img}
        alt='Decoration department'
      />
      <Divider />
      <RevPagesBox
        title='COPORATE EVENTS'
        description='When your company puts on an event, you have one goal: represent your organization in the best way possible. By working closely with a Sample Event & Design Specialist, we’ll help you do just that. We can design, conceptualize, produce and manage large-scale corporate events such as business conferences, award shows, product unveilings, grand openings and corporate retreats. Our team is an invaluable partner you can depend on to take the load off your internal resources and consider the tiniest of details.'
        image={img}
        alt='Decoration department'
      />
      <Divider />
      <PagesBox
        title='FUNERAL EVENTS'
        description='Planning an event can be a big undertaking. The food, the décor, the entertainment… it gets overwhelming if you don’t have a dependable partner to help you! When you work with Sample, we sweat the details so you don’t have to. Your personal Catering + Event Specialist will guide you through the entire process – understanding your vision, suggesting ideas, and making it all happen. You’ll love working with us, because we take the time to give your occasion the attention it deserves and, most importantly, we have fun!'
        image={img}
        alt='Decoration department'
      />
      <Divider />
      <RevPagesBox
        title='SOCIAL EVENTS &amp; LOTS MORE...'
        description='Spending time with the people we know and love is what life’s all about. That’s why the team at Sample is so dedicated to helping you bring family, friends and acquaintances together to share a special experience. Small and intimate or large and extravagant, we’ll work with you to plan an amazing party!'
        image={img}
        alt='Decoration department'
      />
      <ContactBox category={'decoration'} />
    </div>
  );
};

export default Decoration;
