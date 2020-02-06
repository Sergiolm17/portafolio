import styled from "styled-components";
import { Link as ReachLink } from "@reach/router";

export const Background = styled.div`
  z-index: 10;
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
`;
export const Group = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled(ReachLink)`
  font-family: "Cormorant Garamond", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 43px;
  line-height: 52px;
  color: #19273a;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
    transition: ease-in-out 0.2s;
  }
`;
export const Contact = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 22px;
  color: #19273a;
  text-decoration: none;
  margin: 5px;
  &:hover {
    opacity: 0.5;
    transition: ease-in-out 0.2s;
  }
`;
export const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  color: #19273a;
  margin: 10px;
`;
export const Hr = styled.hr`
  height: 2px;
  width: 90px;
  background-color: black;
`;
