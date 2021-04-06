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
        description='At Sample Catering Services, we’re best known for our diverse menu and delectable food that makes guests savor every bite. Our professionally-trained chefs are connoisseurs who have devoted their lives to perfecting their craft and preparing food that looks just as good as it tastes. We prepare flawless appetizers, meals, and desserts for events of any type and size.At Sample Catering Services, all of our food is cooked fresh and assembled by hand – never frozen. Our chefs are professionally-trained and constantly striving to improve their craft. Their passion is evident from the first bite your guests take all the way through to their last.'
        image={img}
        alt='catering department'
      />

      <Divider />

      <RevPagesBox
        title='SNACKS AND CONFECTIONERIES'
        description='Everyone has their own unique tastes and preferences. That’s why the friendly and flexible team at Sample works closely with you to devise the perfect custom menu for your event. Accommodating of your needs and requests, our top priority is ensuring your comfort and delight throughout the entire process. In fact, we invite you enjoy a private, personalized menu tasting to demonstrate our level of quality and commitment! we don’t think of you as just another customer. You have unique tastes and preferences, so when you visit us for a tasting of our acclaimed catering menu it should be just as unique! While it’s common for other caterers to offer pre-scheduled group tastings with a generic menu set by the chef, we take a different approach. Our tastings are private and personalized just for you.'
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
