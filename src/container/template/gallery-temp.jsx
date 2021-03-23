import React, { useEffect, useState } from "react";
import Dialogs from "./images-dialog";

// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import axios from "axios";
import styled, {keyframes} from "styled-components";
const rotate =keyframes`
	0% {
		filter: grayscale(.8);
	}
	40% {
		filter: grayscale(.5);
	}
	100% {
		filter: grayscale(0);
	}
`
const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  grid-gap: 1.2rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

// const Buttons = styled.div`
//   border: none;
//   background: #fff;
//   display: grid;
//   grid-template-columns: repeat(2, min-content);
//   grid-gap: 0.7rem;
//   align-items: center;
//   justify-content: center;
//   grid-column: 1/-1;
// `;
// const Button = styled.button`
//   border: none;

//   &[class*="active"]:hover {
//     color: blue;
//   }
// `;
const GalleryTemp = ({ business }) => {
  const URL = "https://jln-api.herokuapp.com/api/v1/galleries?";

  // const limit = 1;

  // let [pageState, setPageState] = useState(1);

  // let [nextPage, setNextPage] = useState(false);

  const [businessState, setBusinessState] = useState([
    {
      title: "agriculture",
      description: "active",
      category: "agriculture",
      image: "/static/media/picture1.ed0e85f1.png",
    },
  ]);

  let urlState = business === null ? `${URL}` : `${URL}${business}`;

  // const needle = business !== null ? business : null;

  // const pagify = pageState <= 1 ? null : `page=${pageState}`;

  // let urlState;

  // pagify == null && needle == null
  //   ? (urlState = `${URL}`)
  //   : needle
  //   ? (urlState = `${URL}${needle}`)
  //   : (urlState = `${URL}${pagify}`);

  // needle !== null && pagify !== null
  //   ? (urlState = `${URL}${needle}&${pagify}`)
  // : // eslint-disable-next-line no-self-assign
  // (urlState = urlState);
  useEffect(() => {
    (async () => {
      await axios
        .get(urlState)

        .then((res) => {
          if (res.data.message.toLowerCase() === "success") {
            setBusinessState(res.data.gallerys.gallerys);

            // const currentPage = pageState * limit;

            // res.data.queryLength - currentPage >= 1
            //   ? setNextPage(true)
            //   : setNextPage(false);
          }
        });
    })();
  }, [urlState]);

  console.log(businessState, urlState)

  return (
    <Container>
      {businessState.map((item, index) => (
        <Rotate  key={index}>

          <Dialogs img={item.image} />
        </Rotate>
      ))}

      {/* <Buttons>
        {pageState > 1 ? (
          <Button
            className="active"
            onClick={() => {
              window.scrollTo(0, 600);

              return setPageState(() => (pageState -= 1));
            }}
          >
            <ChevronLeftIcon />
          </Button>
        ) : (
          <Button disabled={true}>
            <ChevronLeftIcon />
          </Button>
        )}
        {nextPage ? (
          <Button
            className="active"
            onClick={() => {
              window.scrollTo(0, 600);

              return setPageState(() => (pageState += 1));
            }}
          >
            <ChevronRightIcon />
          </Button>
        ) : (
          <Button disabled={true}>
            <ChevronRightIcon />
          </Button>
        )}
      </Buttons> */}
    </Container>
  );
};

export default GalleryTemp;
