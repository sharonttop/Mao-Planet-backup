import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { BiSearch, BiUser, BiHeart, BiHomeAlt, BiCartAlt } from 'react-icons/bi'
import logo from '../images/logo.svg'

// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  // const { auth } = props
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        // variant="dark"
        fixed="top"
        className="container"
      >
        <Navbar.Brand href="/home">
          <img
            src={logo}
            height="60"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Brand href="/home">Home</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link as={NavLink} to="/adoptlist" className="navtext">
              毛孩找家
            </Nav.Link>
            <NavDropdown
              title="毛孩雜貨"
              id="collasible-nav-dropdown"
              className="navtext"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/productlist/dog"
                className="navtext"
              >
                狗狗館
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/productlist/cat"
                className="navtext"
              >
                貓貓館
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/hotellist" className="navtext">
              毛孩假期
            </Nav.Link>
            <Nav.Link as={NavLink} to="/bloglist" className="navtext">
              鏟屎官大補帖
            </Nav.Link>
          </Nav>
          <Nav className="mb-5">
            <Nav.Link href="#/" className="navicon">
              <BiSearch />
            </Nav.Link>
            <Nav.Link as={NavLink} to="/member" className="navicon">
              <BiUser />
            </Nav.Link>
            <Nav.Link href="#/" className="navicon">
              <BiHeart />
            </Nav.Link>
            <Nav.Link href="#/" className="navicon">
              <BiHomeAlt />
            </Nav.Link>
            <Nav.Link href="#/" className="navicon">
              <BiCartAlt />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
