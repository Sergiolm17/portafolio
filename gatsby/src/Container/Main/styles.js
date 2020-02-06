import styled from "styled-components"
import { Height } from "../styles"

export const P = styled.p`
  font-size: 1.4em;
  font-family: "Cormorant Garamond", serif;
  font-style: normal;
  font-weight: bold;
  white-space: pre-line;
  overflow: hidden;
  width: auto;
  color: #fff;
  text-align: center;
`

export const App = styled.div`
  ${Height}
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`
/*


  background-image: url(${props => props.url});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
*/
