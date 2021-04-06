import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 20vw);
  grid-template-rows: 30rem;

  @media only screen and (max-width: 902px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;
  }
  @media only screen and (max-width: 602px) {
    grid-template-columns: repeat(3, 31vw);
    justify-content: space-between;
  }
  @media only screen and (max-width: 5  02px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  top: -3rem;
  right: -5rem;
  margin: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: all 0.3s ease;
  &:hover {
    z-index: 20;
  }
  @media only screen and (max-width: 602px) {
    top: 0rem;
    right: 0rem;
  }
`;
export const Content1 = styled.div`
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  top: 2rem;
  right: -2rem;
  margin: 2rem 0;
  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  &:hover {
    z-index: 20;
  }
  @media only screen and (max-width: 602px) {
    top: 0rem;
    right: 0rem;
  }
`;
export const Content2 = styled.div`
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  top: -1.5rem;
  left: -3rem;
  margin: 2rem 0;
  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  &:hover {
    z-index: 20;
  }
  @media only screen and (max-width: 602px) {
    top: 0rem;
    left: 0rem;
  }
`;

export const rotate = keyframes`
0% {
  transform: scale(1);
}
40% {
  transform: scale(1.1);
	}
	100% {
    transform: scale(1.05);
	}
  `;
export const Image = styled.img`
  height: 60vh;
  width: 100%;
  border-radius: 5px;

  &:hover {
    animation: ${rotate} 4s linear infinite;
  }
`;
export const ImageBox = styled.div`
  grid-row: 1/2;
  grid-column: 1/-1;
  border-radius: 5px;
  overflow: hidden;
`;
export const Text = styled.div`
  position: absolute;
  bottom: 3rem;
  left: -9rem;
  grid-row: 1/2;
  grid-column: 1/-1;
  z-index: 10;
  height: 6rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center;
  border-radius: 5px;
  transition: all 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &::after,
  &::before {
    content: ""; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    border-radius: 0px;
    background-color: rgb(0, 0, 0, 0.5);
    opacity: 0.7;
    transition: all 0.2s ease-out;
    ${Content}:hover & {
      background-color: rgb(0, 0, 0, 0.8);
    }
  }

  ${Content}:hover & {
    left: 0rem;
  }
  @media only screen and (max-width: 602px) {
    left: 0rem;
  }
  @media only screen and (max-width: 502px) {
    left: -9rem;
  }
`;
export const Text1 = styled.div`
  position: absolute;
  bottom: 3rem;
  left: -9rem;
  grid-row: 1/2;
  grid-column: 1/-1;
  z-index: 10;
  height: 6rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center;
  border-radius: 5px;
  transition: all 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &::after,
  &::before {
    content: ""; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    border-radius: 0px;
    background-color: rgb(0, 0, 0, 0.5);
    opacity: 0.7;
    transition: all 0.2s ease-out;
    ${Content1}:hover & {
      background-color: rgb(0, 0, 0, 0.8);
    }
  }

  ${Content1}:hover & {
    left: 0rem;
  }
`;
export const Text2 = styled.div`
  position: absolute;
  bottom: 3rem;
  left: -9rem;
  grid-row: 1/2;
  grid-column: 1/-1;
  z-index: 10;
  height: 6rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center;
  border-radius: 5px;
  transition: all 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &::after,
  &::before {
    content: ""; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    border-radius: 0px;
    background-color: rgb(0, 0, 0, 0.5);
    opacity: 0.7;
    transition: all 0.2s ease-out;
    ${Content2}:hover & {
      background-color: rgb(0, 0, 0, 0.8);
    }
  }

  ${Content2}:hover & {
    left: 0rem;
  }
`;
export const Bg = styled.div`
height: 60vh;
width: 100%;
border-radius: 5px;
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  }
`;
