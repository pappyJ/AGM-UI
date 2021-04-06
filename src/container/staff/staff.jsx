import React from 'react';
import Img1 from '../../images/ftt.jpg';
import { CardMedia } from '@material-ui/core';
import { MdText, SmText } from '../../constants/style';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import fb from '../../images/fbb.svg';
import wap from '../../images/wap.svg';

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
  background-color: rgb(0, 0, 0, 0.5);
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
          <CardMedia image={Img1} className={classes.img} title='chief chef' />
          <Profile>
            <div style={{ xIndex: '5' }}>
              <MdText bold white>
                Chef Ngozi
              </MdText>
              <SmText white>Cheif chef</SmText>
            </div>
            <Legal>
              <SocialLink href='L'>
                <SocialIcon src={fb} />
              </SocialLink>
              <SocialLink href='L'>
                <SocialIcon src={wap} />
              </SocialLink>
            </Legal>
          </Profile>
        </Staff>
        <Text>
          <Lg>About Us</Lg>
          <div>
            <SmText>
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              nulla saepe suscipit ullam aperiam, ad cum magnam provident
              corrupti consequatur minima quae eum eius officiis earum commodi
              dolorem, sapiente nemo!"
            </SmText>
          </div>
        </Text>
      </Boxes>
    </Container>
  );
};

export default Staffs;
