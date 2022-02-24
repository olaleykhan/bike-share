import React from "react";
import bikersData from "../../data/bikers-data.json";
import Card from "../../components/Card";
import styled from "styled-components";

const Bikers = ({ data }) => {
  return (
    <Wrap>
      {data.map((biker) => (
        <Card key={biker.id} {...biker} />
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
export default Bikers;
