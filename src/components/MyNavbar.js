import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { BiSearch, BiUser, BiCartAlt } from 'react-icons/bi'
import Avatar from './Avatar'
// import ReadingProgress from '../components/ReadingProgress'
import logo from '../images/logo.svg'
import '../Styles/MyNavbar.scss'

// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  const { auth } = props

  /*試寫大頭貼從localStorge拿資料不用從後端fetch
    // const { auth, myAvatar, setMyAvatar } = props (從login引入useState作法)*/
  return (
    <>
      {/* <div className="ACtopYellow"></div> */}

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        // variant="dark"
        fixed="top"
        className="container-fluid ACnavCSS px-md-5"
      >
        <Navbar.Brand href="/home">
          <img
            src={logo}
            height="60"
            className="d-inline-block align-top mr-md-5"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            <Nav.Link
              as={NavLink}
              to="/adoptlist"
              className="ACnavtext mr-md-3"
            >
              毛孩找家
            </Nav.Link>
            <NavDropdown
              title="毛孩雜貨"
              id="collasible-nav-dropdown"
              className="ACnavtext mr-md-2"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/productlist/dog"
                className="ACnavtext"
              >
                狗狗館
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/productlist/cat"
                className="ACnavtext"
              >
                貓貓館
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={NavLink}
              to="/hotellist"
              className="ACnavtext mr-md-3"
            >
              毛孩假期
            </Nav.Link>
            <Nav.Link as={NavLink} to="/bloglist" className="ACnavtext mr-md-3">
              鏟屎官大補帖
            </Nav.Link>
            {auth && (
              <Nav.Link
                as={NavLink}
                to="/admin"
                className="navtext d-flex d-block d-md-none"
              >
                會員專區
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link
                as={NavLink}
                to="/login"
                className="navtext d-flex d-block d-md-none"
              >
                會員登入
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link
                as={NavLink}
                to="/signup"
                className="navtext d-flex d-block d-md-none"
              >
                新用戶註冊
              </Nav.Link>
            )}
          </Nav>

          <Nav className="mb-4 d-flex d-none d-md-row-block px-md-2">
            <Nav.Link href="#/" className="ACnavIcon">
              <BiSearch />
            </Nav.Link>
            {!auth && (
              <Nav.Link as={NavLink} to="/login" className="ACnavIcon">
                <BiUser />
              </Nav.Link>
            )}
            {auth && (
              <Nav.Link as={NavLink} to="/admin" className="ACnavIcon">
                <Avatar />
                {/*
                試寫大頭貼從localStorge拿資料不用從後端fetch 
                (從login引入useState作法)
                 <Avatar
                  auth={auth}
                  myAvatar={myAvatar}
                  setMyAvatar={setMyAvatar}
                /> */}
              </Nav.Link>
            )}
            {/* <Nav.Link href="#/" className="ACnavIcon">
              <BiHeart />
            </Nav.Link>
            <Nav.Link href="#/" className="ACnavIcon">
              <BiHomeAlt />
            </Nav.Link> */}
            <Nav.Link href="#/" className="ACnavIcon">
              <BiCartAlt />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <div>
        <ReadingProgress />
      </div> */}
    </>
  )
}

export default MyNavbar
