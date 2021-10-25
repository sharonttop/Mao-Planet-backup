import React from 'react'
import logo from '../images/logo.svg'
import '../App.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessage2Line, RiFacebookFill } from 'react-icons/ri'
import { BiPhone } from 'react-icons/bi'

function MyFooter(props) {
  return (
    <>
      <footer className="footer mt-auto py-3">
        <div className="container my-3">
          <div className="row">
            <div className="container col-md-3">
              <img src={logo} alt="" className="footerlogo" />
            </div>
            <div className="container col-md-3">
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
            <div className="container col-md-3">
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
            <div className="container col-md-3">
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
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p className="my-2">
          Copyright © Mao Planet All Rights Reserved. Designed by Mao Planet.
        </p>
      </div>
    </>
  )
}

export default MyFooter
