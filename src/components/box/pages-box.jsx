import React from "react";
import styled from "styled-components";
import { LgText, SmText } from "../../constants/style";
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 6rem;

  @media only screen and (max-width: 1000px) {
    padding: 2rem 3rem;
  }
  @media only screen and (max-width: 850px) {
    padding: 2rem 1rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 1rem;

  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

// const ContentRev = styled.div`
//   display: grid;
//   grid-template-columns: min-content 1fr;
//   align-items: center;
//   grid-gap: 1rem;

//   @media only screen and (max-width: 850px) {
//     grid-template-columns: 1fr;
//   }
// `;
const WriteUp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 1rem;
  @media only screen and (max-width: 850px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;


// const Offers = styled.div`
// width: 20%;`;
const Image = styled.div``;


export const PagesBox = ({ title, description, image, alt, offers }) => {
  return (
    <Container>
      <Content>
        <WriteUp>
          <LgText style={{ textAlign: "center" , color: "#473BF0"}}>{title}</LgText>
          <SmText>{description}</SmText>
          
        </WriteUp>
        <Image>
          <Img src={image} alt={alt} />
        </Image>
      </Content>
    </Container>
  );
};

// export const RevPagesBox = ({ title, description, image, alt, offers }) => {
//   return (
//     <Container>
//       <ContentRev>
//         <Image>
//           <Img src={image} alt={alt} />
//         </Image>
//         <WriteUp>
//           <LgText style={{ textAlign: "center" }}>{title}</LgText>
//           <SmText>{description}</SmText>
//           <SpBox>
//             <AllInclusiveIcon
//               style={{ color: "#03663e", width: "4rem", height: "4rem" }}
//               checked
//             />
//             <Offers>
//               <MdText bold>{offers}</MdText>
//             </Offers>
//           </SpBox>
//         </WriteUp>
//       </ContentRev>
//     </Container>
//   );
// };