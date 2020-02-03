import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Background = styled(Grid)`
  height: 50vh;
  background: rgba(25, 39, 58, 1);
  position: relative;
  overflow: hidden;
  float: left;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div`
  background-image: url(http://robgrabowski.me/wp-content/uploads/2016/12/laspuertas.jpg);
  background-position: center center;
  background-size: cover;
  bottom: 0;
  left: 0;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 0;

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-size: 1em;
    line-height: 26px;
    z-index: 3;
    opacity: 1;
  }
  &:hover {
    opacity: 0.2;
  }
  transition: opacity 0.4s;
`;
const Title = styled.h3`
  font-family: "Cormorant Garamond", serif;
  font-style: normal;
  font-size: 2em;
  z-index: 0;
  opacity: 1;
`;

export default () => {
  return (
    <Background item xs={12} sm={6} md={4}>
      <Title>Project 1</Title>
      <p>cargo</p>
      <Image></Image>
    </Background>
  );
};
