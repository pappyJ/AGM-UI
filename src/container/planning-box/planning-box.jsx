import React from 'react';
import Plans from './plans';
import Img from '../../images/pat.svg';
import styled from 'styled-components';
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5rem 5rem;
  grid-gap: 0.8rem;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 5rem 1rem;
  }
`;
const Div = styled.div`
  background-image: url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

const PlanningBox = () => {
  const Data = [
    {
      id: 1,
      plan: 'Launching',
      info: 'House Car Business ',
      num: 1,
    },
    { id: 2, plan: 'Wedding', info: 'Traditional White Western', num: 2 },
    { id: 3, plan: 'Birthday', info: 'Progressive cohesive structure', num: 3 },
    {
      id: 4,
      plan: 'Coporate & Social Events',
      info: 'Meetings Anniverseries Seminars',
      num: 4,
    },
    { id: 5, plan: 'Funerals', info: 'Traditional Western Customised', num: 5 },
    {
      id: 6,
      plan: 'All Parties',
      info: 'Child dedication Anniversary Bridal shower etc',
      num: 6,
    },
  ];
  return (
    <Div>
      {/* <HeadBox section='planning' title='Check Our Recent
Projects' color='white'/> */}
      <Container>
        {Data.map((item, idx) => (
          <Plans key={item.id} plan={item.plan} info={item.info} />
        ))}
      </Container>
    </Div>
  );
};

export default PlanningBox;
