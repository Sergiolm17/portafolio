import styled from "styled-components";
import { Col } from "react-grid";

export const Background = styled(Col)`
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
export const Image = styled.div`
  background-image: url(${props => props.url});
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
export const Title = styled.h3`
  font-family: "Cormorant Garamond", serif;
  font-style: normal;
  font-size: 2em;
  z-index: 0;
  opacity: 1;
`;
