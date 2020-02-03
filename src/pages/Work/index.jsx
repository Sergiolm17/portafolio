import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { Height } from "../styles";

import ItemWork from "../../components/ItemWork";
const ContainerGrid = styled(Grid)`
  ${Height}
`;

export default () => {
  return (
    <ContainerGrid container spacing={0}>
      <ItemWork />
      <ItemWork />
      <ItemWork />
      <ItemWork />
      <ItemWork />
      <ItemWork />
      <ItemWork />
      <ItemWork />
    </ContainerGrid>
  );
};
