import React from 'react';
import LandingBox from '../../components/box/landing-box';
import {PagesBox, RevPagesBox} from '../../components/box/pages-box';
import HeadBox from "../../container/head-box/head-box";
import ContactBox from "../../components/contact-box/contact-box";
import img from '../../images/bgg.jpg'
import { Divider } from '@material-ui/core';
const Decoration = () => {
    return (
        <div>
            <LandingBox title="DECORATION" to="decoration" currentPage="Decoration"/>
             <HeadBox section='DECORATION' title='Welcome to the Best
Decoration Service' />
            <PagesBox
            title="Decoration"
            description="lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes"
            image={img}
            alt='Decoration department'
            />
            <Divider/>
            <RevPagesBox
             title="Decoration"
             description="lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes, lorem how are uo doing yes"
             image={img}
             alt='Decoration department'
             />
         <ContactBox />
        </div>
    );
};

export default Decoration;