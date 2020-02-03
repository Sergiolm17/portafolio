import styled from "styled-components";

export const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  font-size: calc(10px + 2vmin);
  background: #19273a;
  &::after {
    content: #fff;
  }
`;
export const P = styled.p`
  font-size: 2.4em;
  font-family: "Cormorant Garamond", serif;
  font-style: normal;
  font-weight: bold;
  white-space: pre-line;
  overflow: hidden;
  width: auto;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  margin: 25px 0;
`;
export const Text = styled.p`
  font-size: 1.4em;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  white-space: pre-line;
  line-height: 164%;
  overflow: hidden;
  width: auto;
  color: #fff;
  margin: 15px 0;
  padding: 0 20px;
`;
