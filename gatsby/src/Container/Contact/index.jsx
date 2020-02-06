import React from "react"
import { Input } from "../../components/Input"
import { Container, Col } from "react-grid"
import styled from "styled-components"
import { Height } from "../styles"
import { useFetch } from "../../hooks/useFetch"
import Image from "../../components/image"
const App = styled.div`
  ${Height}
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(25, 39, 58, 0.85);
`

const Grid = styled.div`
  display: grid;
  grid-row-gap: 30px;
`

const Background = styled.div`
  border-radius: 50px;
  background: linear-gradient(145deg, #172334, #1b2a3e);
  box-shadow: 30px 30px 60px #152131, -30px -30px 60px #1d2d43;
  color: #ffffff;
  padding: 30px;
  position: absolute;
  @media (min-width: 600px) {
    position: relative;
  }
  @media (max-width: 600px) {
    height: 87.5vh;
    transition-duration: 3s;
    background: rgba(25, 39, 58, 0.7);
  }
  transition-delay: 500ms;
  transition-duration: 3s;
`
export default () => {
  const data = useFetch({
    url: "https://sergiolazaromondargo.firebaseio.com/profile.json",
    init: {},
  })
  return (
    <App>
      <Background>
        <h1>Want to get in touch?</h1>
        <p>
          This form is for business inquiries, questions and comments alike. I’m
          always happy to talk!
        </p>
        <Grid>
          <Input type="text" name="hola" placeholder="Your name*" />
          <Input type="text" name="hola" placeholder="Email*" />
          <Input type="text" name="hola" placeholder="Message*" />
        </Grid>
      </Background>
      <Image src="Hero.jpg" background={"center"} />
    </App>
  )
}
