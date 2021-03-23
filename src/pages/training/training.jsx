import React from 'react';
import LandingBox from '../../components/box/landing-box';
import {PagesBox} from '../../components/box/pages-box';
import HeadBox from "../../container/head-box/head-box";
import ContactBox from "../../components/contact-box/contact-box";
import img from '../../images/bgg.jpg'
const Training = () => {
    return (
        <div>
            <LandingBox title="Training" to="Training" currentPage="Training"/>
             <HeadBox section='Training' title='Welcome to the Best
Training Service' />
            <PagesBox
            title="Training"
            description="lorem how are uo doing yes"
            image={img}
            alt='Training department'
            />
         <ContactBox />
        </div>
    );
};

export default Training;