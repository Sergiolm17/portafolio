import styled from "styled-components";
import { Height } from "../styles";
import posed from "react-pose";
import Grid from "@material-ui/core/Grid";

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
  text-align: center;
`;

export const App = styled.div`
  ${Height}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(15px + 2vmin);
  background-image: url(${props => props.url});
  color: #fff;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
export const Body = styled(Grid)`
  background: #e7e7e7;
  h2 {
    color: #19273a;
    font-family: "Cormorant Garamond", serif;
    font-style: normal;
    font-weight: bold;
  }

  p {
    color: #777777;
  }
`;
