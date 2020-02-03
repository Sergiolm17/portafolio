import React from "react";
import { Input } from "../../components/Input";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Height } from "../styles";
import { ContactImage } from "../../data";

const App = styled(Grid)`
  ${Height}
`;
const Image = styled(Grid)`
  background-image: url(${props => props.url});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
const Background = styled(Grid)`
  ${Height}
  background: rgba(25, 39, 58, 0.9);
  color: #ffffff;
  padding: 30px;
  display: grid;
  grid-row-gap: 30px;
  position: absolute;
  @media (min-width: 600px) {
    position: relative;
    background: rgba(25, 39, 58, 1);
  }
`;
export default () => {
  return (
    <App container spacing={0}>
      <Image item xs={12} sm={6} url={ContactImage} />
      <Background item xs={12} sm={6}>
        <h1>Want to get in touch?</h1>
        <p>
          This form is for business inquiries, questions and comments alike. I’m
          always happy to talk!
        </p>
        <Input type="text" name="hola" placeholder="Your name*" />
        <Input type="text" name="hola" placeholder="Email*" />
        <Input type="text" name="hola" placeholder="Message*" />
      </Background>
    </App>
  );
};