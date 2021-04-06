import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import GalleryTemp from '../../container/template/gallery-temp';
//import Box from "../../components/box/box";
import axios from 'axios';
import HeadBox from '../../container/head-box/head-box';
// import { LgText, SmText } from "../../constant/style";

const Container = styled.div`
  padding-top: 4rem;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  justify-items: center;
  padding: 4rem;

  @media only screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const Gallery = (props) => {
  //const { path } = useRouteMatch();

  const URL = 'https://jln-ap.herokuapp.com/api/v1/';

  const [business, setBusiness] = useState([
    {
      name: 'agriculture',
      description: 'active',
      image: '/static/media/picture1.ed0e85f1.png',
    },
  ]);

  const [businessUrl, setBusinessUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await axios
        .get(`${URL}businesses`)

        .then((res) => {
          if (res.data.message.toLowerCase() === 'success') {
            setBusiness(res.data.businesss.businesss);
          }
        });
    })();
  }, [businessUrl]);

  //fake to cancel warning
  const fake = setBusinessUrl;
  console.log(business, fake);

  return (
    <Container>
      {/* <Box title="Gallery" currentPage="Gallery" linkto="gallery" /> */}
      <HeadBox section="Gallery" title="View our projects" />
      <Content>
        <Route
          path={`/`}
          component={() => <GalleryTemp business={businessUrl} />}
        />
      </Content>
    </Container>
  );
};

export default Gallery;
