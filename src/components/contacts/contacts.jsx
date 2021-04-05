import React, { useContext } from "react";
import styled from "styled-components";
import { MdText, SmText } from "../../constants/style";
import { ContactProvider } from "../../utils/contactContext";
import Call from '../../images/cl.png'
import Email from '../../images/em.png'
import Location from '../../images/lc.png'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
  }
`;

const ReachUs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: space-between;
  background: #f8f9fa;
  padding: 6rem 6rem;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 6rem 2rem;
  }
`;
const ContactBox = styled.div`
  display: grid;
  grid-template-rows: max-content 3rem min-content;
  justify-items: center;
  align-items: center;
  padding: 3rem 0;
  width: 100%;
  background: #fff;
  @media only screen and (max-width: 600px) {
  }
`;
const Icon = styled.img`
  height: 4rem;
`;
const Contacts = () => {
  const contactContext = useContext(ContactProvider());

  return (
    <Container>
      <ReachUs>
        <ContactBox>
          <Icon src={Location} alt="reach us" />
          <MdText bold>Locate Us</MdText>
       
          <>
            <SmText center>OFFICE: {contactContext.contact.address}</SmText>
            <SmText center>Farm Estate: Owerri Industrial Estate</SmText>
          </>
        </ContactBox>
        <ContactBox>
          <Icon src={Call} alt="call us" />
          <MdText bold>Contact Us</MdText>
          {contactContext.contact.phone.map((item, index) => (
            <SmText key={index} center>{item}</SmText>
          ))}
        </ContactBox>
        <ContactBox>
        <Icon src={Email} alt="Email us" />
           <MdText bold>Email Us</MdText>
          {contactContext.contact.email.map((item, index) => (
            <SmText key={index} center>{item}</SmText>
          ))}
        </ContactBox>
      </ReachUs>
    </Container>
  );
};

export default Contacts;
