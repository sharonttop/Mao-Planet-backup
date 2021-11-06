import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import MobileHomeBlogSection from './MobileHomeBlogSection'

import BlogPic1 from '../images/Home/BlogPic1_150x150.jpg'
import BlogPic2 from '../images/Home/BlogPic2_150x150.jpg'
import '../Styles/HomeBlogSection.scss'

function HomeBlogSection(props) {
  return (
    <>
      {/* PC */}
      <Container fluid id="ACblogSection" className="p-0 d-md-block d-none">
        <Row className="d-flex justify-content-center">
          <Link
            to="/bloglist/blogarticle1"
            className="ACblogIntro col-md-4 mx-2 mt-5 p-3 d-flex"
          >
            <div className="ACblogIntroPic px-0">
              <img src={BlogPic1} alt="" />
            </div>
            <div className="col ACblogIntroText my-0 pr-0">
              <h6>養貓新手必備知識</h6>
              <p className="mb-0">
                這篇文章是寫給家中有一歲以內的幼貓、或是準備新養貓的新手家長們看的，希望能解除大家心中的疑惑，充實醫療保健相關的知識，讓新手貓奴們升級成更稱職的毛孩爸媽！
              </p>
            </div>
          </Link>
          <Link
            to="/bloglist"
            className="ACblogIntro col-md-4 mx-2 mt-5 p-3 d-flex"
          >
            <div className="ACblogIntroPic px-0">
              <img src={BlogPic2} alt="" />
            </div>
            <div className="col ACblogIntroText my-0 pr-0">
              <h6>如何幫狗狗選擇美容店？</h6>
              <p className="mb-0">
                寵物美容院比比皆是，目前寵物美容業並沒有公定的標準規定，多是靠自主經營或寵物美容老師傳授，毛爸毛媽該如何選擇，才能保障自己和毛孩的權益呢？
              </p>
            </div>
          </Link>
        </Row>
      </Container>

      {/* mobile: 套carousel */}
      <div fluid id="m-ACblogSection" classNmae="mt-3 p-0 d-md-none d-block">
        <MobileHomeBlogSection />
      </div>

      {/* button:PC mobile共用 */}
      <div
        id="ACblogBtnSection"
        className="d-flex justify-content-center mb-5 pt-4 p-0"
      >
        <Link to="/bloglist">
          <Button className="m-ACYellowOutlineBtn">
            <div>
              <FaPaw />
              &nbsp;&nbsp;&nbsp;看更多文章
            </div>
          </Button>
        </Link>
      </div>
    </>
  )
}

export default HomeBlogSection
