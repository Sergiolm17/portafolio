import styled from "styled-components";
import { Height } from "../styles";
import posed from "react-pose";
const Ppose = posed.p({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export const P = styled(Ppose)`
  font-size: 1.4em;
  font-family: "Cormorant Garamond", serif;
  font-style: normal;
  font-weight: bold;
  white-space: pre-line;
  overflow: hidden;
  width: auto;
  color: #fff;
  text-align: center;
`;

export const App = styled.div`
  ${Height}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-image: url(${props => props.url});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
