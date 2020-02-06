import React, { useState } from "react"
import styled from "styled-components"
import menu from "../../images/menu.svg"
import returnicon from "../../images/return.svg"
import sm from "../../images/sm.svg"
import Menu from "../Menu"
import { Link } from "gatsby"
import Image from "../image"

const Header = styled.div`
  min-height: 9vh;
  min-width: 95vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`
const MenuLogo = styled.img`
  &:hover {
    opacity: 0.8;
  }
  transition: opacity ease-in-out 0.2s;
`

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Menu inopen={open} setOpen={() => setOpen(false)} />
      <Header>
        <Link to="/">
          <img src={sm} alt="sm" />
        </Link>
        <MenuLogo
          src={open ? returnicon : menu}
          alt="menu"
          style={{ zIndex: 1000 }}
          onClick={() => setOpen(!open)}
        />
      </Header>
    </>
  )
}
