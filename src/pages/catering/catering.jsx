import React from 'react';
import LandingBox from '../../components/box/landing-box';
import {PagesBox} from '../../components/box/pages-box';
import HeadBox from "../../container/head-box/head-box";
import ContactBox from "../../components/contact-box/contact-box";
import img from '../../images/bgg.jpg'
const Catering = () => {
    return (
        <div>
            <LandingBox title="CATERING" to="catering" currentPage="Catering"/>
             <HeadBox section='CATERING' title='Welcome to the Best
Catering Service' />
            <PagesBox
            title="CATERING"
            description="lorem how are uo doing yes"
            image={img}
            alt='catering department'
            />
         <ContactBox />
        </div>
    );
};

export default Catering;