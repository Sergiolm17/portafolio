import React from "react";
import { Background, Title, Image } from "./styles";
import posed from "react-pose";

const Item = posed.div({
  open: { x: 0, opacity: 1 },
  closed: { x: 20, opacity: 0 }
});
export default ({ work }) => {
  return (
    <Item>
      <Background item xs={12} sm={6} md={4}>
        <Title>{work.titulo}</Title>
        <p>{work.cargo}</p>
        <Image url={work.url} />
      </Background>
    </Item>
  );
};
