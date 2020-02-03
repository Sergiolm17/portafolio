import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { Height } from "../styles";
import { Works } from "../../data";
import posed from "react-pose";

import ItemWork from "../../components/ItemWork";
const ContainerGrid = styled(Grid)`
  ${Height}
`;
const Sidebar = posed.div({
  enter: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 500
  },
  exit: { x: "-100%", delay: 300 }
});
export default () => {
  return (
    <ContainerGrid container spacing={0}>
      <Sidebar>
        {Works.map((work, i) => (
          <ItemWork key={i} work={work} />
        ))}
      </Sidebar>
    </ContainerGrid>
  );
};
