import React from 'react'
import logo from '../images/logo.svg'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessage2Line, RiFacebookFill } from 'react-icons/ri'
import { BiPhone } from 'react-icons/bi'
import { Container, Row } from 'react-bootstrap'
import '../Styles/MyFooter.scss'

function MyFooter(props) {
  return (
    <>
      {/* PC */}
      <footer className="footer mt-auto p-0">
        <Container className="my-3 p-0">
          <Row>
            <div className="col-md-3 d-none d-md-block">
              <img src={logo} alt="" className="footerlogo" />
            </div>

            <div className="col-md-3 d-none d-md-block">
              <ul>
                <h5>About Us</h5>
                <li className="footerlink">
                  <a href="#/">品牌故事</a>
                </li>
                <li className="footerlink">
                  <a href="#/">銷售據點</a>
                </li>
                <li className="footerlink">
                  <a href="#/">工作機會</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 d-none d-md-block">
              <ul>
                <h5>Support</h5>
                <li className="footerlink">
                  <a href="#/">付款方式</a>
                </li>
                <li className="footerlink">
                  <a href="#/">退換貨政策</a>
                </li>
                <li className="footerlink">
                  <a href="#/">隱私權政策</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 d-none d-md-block">
              <ul>
                <h5>Contact Us</h5>
                <li className="footerlink">週一～週五 10:00-18:00</li>

                <div className="d-flex justify-content-start">
                  <div className="footericon">
                    <a href="#/">
                      <HiOutlineMail />
                    </a>
                  </div>
                  <div className="footericon">
                    <a href="#/">
                      <RiMessage2Line />
                    </a>
                  </div>
                  <div className="footericon">
                    <a href="#/">
                      <BiPhone />
                    </a>
                  </div>
                  <div className="footericon">
                    <a href="#/">
                      <RiFacebookFill />
                    </a>
                  </div>
                </div>
              </ul>
              {/* <span className="text-muted">Place sticky footer content here.</span> */}
            </div>

            {/* mobile */}
            <div className="col-12 d-block d-md-none d-flex justify-content-center p-0">
              <img src={logo} alt="" className="m-footerlogo" />
            </div>
            <div className="col-12 d-block d-md-none p-0">
              <ul className="p-0">
                <h5 className="m-footertopic">About Us</h5>
                <li className="m-footerlink">
                  <a href="#/">品牌故事</a>
                </li>
                <li className="m-footerlink">
                  <a href="#/">銷售據點</a>
                </li>
                <li className="m-footerlink">
                  <a href="#/">工作機會</a>
                </li>
              </ul>
            </div>
            <div className="col-12 d-block d-md-none p-0">
              <ul className="p-0">
                <h5 className="m-footertopic">Support</h5>
                <li className="m-footerlink">
                  <a href="#/">付款方式</a>
                </li>
                <li className="m-footerlink">
                  <a href="#/">退換貨政策</a>
                </li>
                <li className="m-footerlink">
                  <a href="#/">隱私權政策</a>
                </li>
              </ul>
            </div>
            <div className="col-12 d-block d-md-none p-0">
              <ul className="p-0">
                <h5 className="m-footertopic">Contact Us</h5>
                <li className="m-footerlink">週一～週五 10:00-18:00</li>

                <div className="d-flex justify-content-center">
                  <div className="m-footericon">
                    <a href="#/">
                      <HiOutlineMail />
                    </a>
                  </div>
                  <div className="m-footericon">
                    <a href="#/">
                      <RiMessage2Line />
                    </a>
                  </div>
                  <div className="m-footericon">
                    <a href="#/">
                      <BiPhone />
                    </a>
                  </div>
                  <div className="m-footericon">
                    <a href="#/">
                      <RiFacebookFill />
                    </a>
                  </div>
                </div>
              </ul>
              {/* <span className="text-muted">Place sticky footer content here.</span> */}
            </div>
          </Row>
        </Container>
      </footer>
      <div className="copyright container-fluid p-0">
        <p className="my-2">Copyright © Mao Planet All Rights Reserved.</p>
      </div>
    </>
  )
}

export default MyFooter
