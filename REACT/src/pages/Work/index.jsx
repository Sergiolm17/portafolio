import React from "react";
import styled from "styled-components";
import { Col } from "react-grid";
import { Height } from "../styles";
import { useFetch } from "../../hooks/useFetch";

import ItemWork from "../../components/ItemWork";
const ContainerGrid = styled(Col)`
  ${Height}
`;

export default () => {
  const data = useFetch({
    url: "https://sergiolazaromondargo.firebaseio.com/work.json",
    init: []
  });
  return (
    <ContainerGrid container spacing={0}>
      {data.map((work, i) => (
        <ItemWork key={i} work={work} />
      ))}
    </ContainerGrid>
  );
};
