import React from "react"
import styled from "styled-components"
import { Height } from "../styles"

export const Container = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  ${Height}
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    borde--------------------------r-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 10px;
  }
`
export default ({ children }) => {
  return <Container>{children}</Container>
}
