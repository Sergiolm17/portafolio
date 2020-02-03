import React, { useState } from "react";
import styled from "styled-components";
import menu from "../../menu.svg";
import sm from "../../sm.svg";
import Menu from "../Menu";
import { Link } from "@reach/router";

const Header = styled.div`
  min-height: 9vh;
  min-width: 95vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;
const MenuLogo = styled.img`
  &:hover {
    opacity: 0.8;
  }
  transition: opacity ease-in-out 0.2s;
`;

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Menu inopen={open} setOpen={() => setOpen(false)} />
      <Header>
        <Link to="/">
          <img src={sm} alt="sm" />
        </Link>
        <MenuLogo
          src={menu}
          alt="menu"
          style={{ zIndex: 1000 }}
          onClick={() => setOpen(!open)}
        />
      </Header>
    </>
  );
};
