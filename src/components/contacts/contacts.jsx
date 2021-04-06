import styled from 'styled-components';
import { MdText, SmText } from '../../constants/style';
import Call from '../../images/cl.png';
import Email from '../../images/em.png';
import Location from '../../images/lc.png';
import fb from '../../images/fb.svg';
import inst from '../../images/insta.svg';
import ws from '../../images/wa.svg';

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

const SocialLink = styled.a`
  text-align: center;
  text-decoration: none;
`;

const Contacts = () => {
  return (
    <Container>
      <ReachUs>
        <ContactBox>
          <Icon src={Location} alt='reach us' />
          <MdText bold>Locate Us</MdText>

          <>
            <SmText center>HEAD OFFICE: #92 porthacourt Rd Aba </SmText>
          </>
        </ContactBox>
        <ContactBox>
          <Icon src={Call} alt='call / sms' />
          <MdText bold>Contact / SMS</MdText>
          <SmText center>+234 816 861 6822</SmText>
          <SmText center>+234 816 296 0808</SmText>
        </ContactBox>
        <ContactBox>
          <Icon src={Email} alt='Email us' />
          <MdText bold>Email Us</MdText>
          <SmText center>Ifeomaraphael@gmail.com</SmText>
        </ContactBox>
      </ReachUs>
      <ReachUs>
        <ContactBox>
          <Icon src={ws} alt='reach us' />
          <MdText bold>whatsapp Us</MdText>

          <>
            <SmText center>+234 816 861 6822</SmText>
          </>
        </ContactBox>
        <ContactBox>
          <Icon src={fb} alt='call us' />
          <MdText bold>Locate Us On facebook via</MdText>
          <>
            <SocialLink href='https://web.facebook.com/agathaifeoma.raphael.5'>
              <SmText center>Sample Catering Services</SmText>
            </SocialLink>
          </>
        </ContactBox>
        <ContactBox>
          <Icon src={inst} alt='call us' />
          <MdText bold>Locate Us On instagram via</MdText>
          <>
            <SocialLink href='https://web.facebook.com/agathaifeoma.raphael.5'>
              <SmText center>Sample Catering Services</SmText>
            </SocialLink>
          </>
        </ContactBox>
      </ReachUs>
    </Container>
  );
};

export default Contacts;
