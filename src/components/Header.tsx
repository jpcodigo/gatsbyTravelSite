import * as React from "react"
import { FaBars } from "react-icons/fa"

import { Link } from "gatsby"
import styled from "styled-components"
import { MenuData } from "../data/MenuData"
import { Btn } from "./Btn"

const Header = () => {
  return (
    <Nav>
      <Bars />
      <NavLink to="/">EXPLORIX</NavLink>
      <NavMenu>
        {MenuData.map((item, idx) => (
          <NavLink to={item.link} key={idx}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Btn primary="true" round="true" to="/trips">
          Book a flight
        </Btn>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background-color: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-with: 768px) {
    display: none;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
