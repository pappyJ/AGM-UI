import React from 'react';
import { CardMedia } from '@material-ui/core';
import { MdText, SmText } from '../../constants/style';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import fb from '../../images/fb.svg';
import ws from '../../images/wa.svg';

import Img from '../../images/white/wh5.jpg';
import { Lg } from '../../components/box/pages-box';
const Container = styled.div`
  padding: 4rem 5rem;
  background: #f5f5f5;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr;
  background-image: url(${Img});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  grid-gap: 3rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 4.5rem;
  @media only screen and (max-width: 700px) {
    padding: 1rem 1rem;
    background-position: center;
    background-size: contain;
  }
`;
const Staff = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 25rem;
  @media only screen and (max-width: 700px) {
  }
`;
const Boxes = styled.div`
  display: grid;
  width: 50rem;
  grid-template-columns: repeat(2, max-content);
  transform: translateY(40%);
  @media only screen and (max-width: 996px) {
    grid-template-columns: 1fr;
    justify-items: center;
    transform: translateY(0);
    width: 100%;
  }
`;
const Legal = styled.div`
  align-self: end;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 1rem;
  justify-self: center;
  z-index: 5;
  @media only screen and (max-width: 602px) {
  }
`;
const Text = styled.div`
  display: grid;
  grid-template-columns: 25rem;
  grid-gap: 1rem;
  justify-self: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  //width: 30rem;
  background: white;
  padding: 1rem 1.5rem;

  @media only screen and (max-width: 966px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
const Profile = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  align-self: end;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  padding: 0.5rem;
  justify-content: space-between;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 10px;
`;

const SocialIcon = styled.img`
  height: 30px;
`;
const SocialLink = styled.a``;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  img: {
    gridColumn: '1/-1',
    gridRow: '1/2',
    height: '25rem',
    width: '25rem',
    borderRadius: '10px',
    '@media only screen and (max-width: 900px)': {
      height: '20rem',
    },
  },
}));

const Staffs = () => {
  const classes = useStyles();
  return (
    <Container>
      <Boxes>
        <Staff>
          <CardMedia
            image={
              'https://scontent.flos3-2.fna.fbcdn.net/v/t1.6435-9/163437955_498810897789306_5419405932388647819_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGbSdNm2E3V0f1G079B3tbr0BcjZyjXvzTQFyNnKNe_NBJAvBPfVoHwUA7IwwLNwdIb07I-U7SYq1Kqbiwcqz5R&_nc_ohc=IunV6BIVt8YAX8VpO0I&_nc_ht=scontent.flos3-2.fna&oh=f1cb0113e8e3f3fce5427e9099ec38a5&oe=6090876A'
            }
            className={classes.img}
            title='chief chef'
          />
          <Profile>
            <div style={{ xIndex: '5' }}>
              <MdText bold white>
                Ifeoma Raphael
              </MdText>
              <SmText white>Cheif chef / CEO</SmText>
            </div>
            <Legal>
              <SocialLink href='L'>
                <SocialIcon src={fb} />
              </SocialLink>
              <SocialLink href='L'>
                <SocialIcon src={ws} />
              </SocialLink>
            </Legal>
          </Profile>
        </Staff>
        <Text>
          <Lg>About Us</Lg>
          <div>
            <SmText>
              " Over the years, Sample Catering Services has built a stellar
              reputation based on our honest approach to business and unwavering
              commitment to excellence. We refuse to compromise on quality and
              our friendly, team-driven culture complements our award-winning
              food. We’re proud to have earned both the respect of our peers and
              the continued business of our loyal customers."
            </SmText>
          </div>
        </Text>
      </Boxes>
    </Container>
  );
};

export default Staffs;
