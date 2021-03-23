import React from 'react';
import ContactBox from '../../components/contact-box/contact-box';
import AboutUs from '../../container/about-us/about-us';
import { Caro } from '../../container/carousel/caro';
import Imgvw from '../../container/gallery-box/gallery-box';
import PlanningBox from '../../container/planning-box/planning-box';
import CateringServices from '../../container/services/catering-services';
import DecoServices from '../../container/services/decoration-services';
import Staffs from '../../container/staff/staff';


const Homepage = () => {
    return (
        <div>
            <Caro />
            <CateringServices />
            <PlanningBox />
            <DecoServices />
            <AboutUs />
            <Imgvw />
            <Staffs/>
            <ContactBox />
        </div>
    );
};

export default Homepage;