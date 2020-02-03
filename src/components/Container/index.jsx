import React from "react";
import styled from "styled-components";
import { Height } from "../../pages/styles";

export const Container = styled.div`
  overflow: auto;
  ${Height}
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 10px;
  }
  div {
    width: 95vw;
  }
`;
export default ({ children }) => {
  return <Container>{children}</Container>;
};
