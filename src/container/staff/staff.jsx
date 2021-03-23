import React from "react";
import HeadBox from "../head-box/head-box";
import Img1 from "../../images/ftt.jpg";
import { Avatar } from "@material-ui/core";
import { MdText, SmText } from "../../constants/style";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import fb from "../../images/fbb.svg";
import wap from "../../images/wap.svg";
const Container = styled.div`
  padding: 4rem 5rem;
  background: #F5F5F5;
   display: grid;
  grid-template-columns: 1fr;
 
  grid-gap: 3rem;
  @media only screen and (max-width: 802px) {
    padding: 1rem 1rem;
  }
`;
const Staff = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 0.3rem;
  @media only screen and (max-width: 700px) {
    padding: 0rem 1rem;
  }
`;
const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-content: center;

  @media only screen and (max-width: 722px) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
`;
const Legal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 1rem;
  justify-self: center;
  @media only screen and (max-width: 602px) {
  }
`;
const SocialIcon = styled.img`
  height: 30px;
`;
const SocialLink = styled.a``;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
}));

const Staffs = () => {
  const classes = useStyles();
  return (
    <Container>
      <HeadBox section='our staff' title='Team' />
      <Boxes>
        <Staff>
          <Avatar src={Img1} className={classes.large} />
          <MdText bold>Chef Ngozi</MdText>
          <SmText>Cheif chef</SmText>
          <Legal>
            <SocialLink href='L'>
              <SocialIcon src={fb} />
            </SocialLink>
            <SocialLink href='L'>
              <SocialIcon src={wap} />
            </SocialLink>
          </Legal>
        </Staff>
        <Staff>
          <Avatar src={Img1} className={classes.large} />
          <MdText bold>Chef Ngozi</MdText>
          <SmText>Cheif chef</SmText>
          <Legal>
            <SocialLink href='L'>
              <SocialIcon src={fb} />
            </SocialLink>
            <SocialLink href='L'>
              <SocialIcon src={wap} />
            </SocialLink>
          </Legal>
        </Staff>
        <Staff>
          <Avatar src={Img1} className={classes.large} />
          <MdText bold>Chef Ngozi</MdText>
          <SmText>Cheif chef</SmText>
          <Legal>
            <SocialLink href='L'>
              <SocialIcon src={fb} />
            </SocialLink>
            <SocialLink href='L'>
              <SocialIcon src={wap} />
            </SocialLink>
          </Legal>
        </Staff>
      </Boxes>
    </Container>
  );
};

export default Staffs;
