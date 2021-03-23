import React from "react";
import ContactBox from "../../components/contact-box/contact-box";
import Contacts from "../../components/contacts/contacts";
import styled from "styled-components";
import HeadBox from "../../container/head-box/head-box";
import LandingBox from "../../components/box/landing-box";

const MessageUs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  padding: 8rem 1rem;
  background: #fff;
`;


const Contact = () => {
  return (
      <div>
         <LandingBox title="Contacts" to="contact" currentPage="Contact"/>
     <HeadBox
        section='CONTACTS'
        title='Reach Us Through Any Suitable Medium'
      />
      <Contacts />
      <MessageUs>
      
        <ContactBox color='secondary' />
      </MessageUs>
    </div>
  );
};

export default Contact;
