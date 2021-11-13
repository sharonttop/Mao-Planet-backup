import React, { useEffect, useState } from 'react'
import './AdoptPage.scss'
import { FaPaw } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import Comments from './Comments/Comments'

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact'
// img src
// import Carousel from './Carousel'

import { withRouter } from 'react-router-dom'

// const fakedata = [
//   {
//     id: '1',
//     name: '牛奶、花生姐妹花',
//     avatar: '../../images/fakeImg/adoptpage-24-01_300x300.jpeg',
//     avatar01: '../../images/fakeImg/adoptpage-24-02_300x300.jpeg',
//     avatar02: '../../images/fakeImg/adoptpage-24-03_300x300.jpeg',
//     avatar03: '../../images/fakeImg/adoptpage-24-04_300x300.jpeg',
//     status: '開放認養',
//     type: '貓咪',
//     gender: '女孩',
//     size: '小型',
//     location: '台中市',
//     info: '兩隻都很親人、會主動討摸呼嚕',
//     cell: '0983111222',
//   },
// ]

//comments
function AdoptPageFakeData() {
  return (
    <>
      {/* header */}
      <>
        <div className="MKheader-title">
          <p>
            貓咪認養資訊:
            <span className="MKtitle-text"> 牛奶、花生姐妹花</span>
          </p>
        </div>
      </>
      {/* Carousel */}
      <div className="MKAPCarousel">
        <MDBCarousel
          activeItem={1}
          length={3}
          // showControls={true}
          // showIndicators={true}
          // className="z-depth-1"
        >
          <MDBCarouselInner className="MKAPCarousel">
            <MDBCarouselItem itemId="1">
              <MDBView className="MKAPCarouselBox">
                <img
                  className="MKAPCarouselimg"
                  src="https://img.onl/H8to4G"
                  alt="First slide"
                />
                {/* <MDBMask overlay="black-light" /> */}
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView className="MKAPCarouselBox">
                <img
                  className="MKAPCarouselimg "
                  src="https://img.onl/Z7XFg9"
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView className="MKAPCarouselBox">
                <img
                  className="MKAPCarouselimg"
                  src="https://img.onl/Xu9hVZ"
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView className="MKAPCarouselBox">
                <img
                  className="MKAPCarouselimg"
                  src="https://img.onl/Z7XFg9"
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </div>

      <>
        <div className="MKrowDetail">
          <div className="MKdetail">
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>姓名</p>
              </li>
              <li className="MKdetail-text">
                <p>牛奶、花生姐妹花</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>狀態</p>
              </li>
              <li className="MKdetail-text">
                <p>開放認養</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>種類</p>
              </li>
              <li className="MKdetail-text">
                <p>貓咪</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>體型</p>
              </li>
              <li className="MKdetail-text">
                <p>小型</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>地區</p>
              </li>
              <li className="MKdetail-text">
                <p>台中市</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>電話</p>
              </li>
              <li className="MKdetail-text">
                <p>0983111222</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>性別</p>
              </li>
              <li className="MKdetail-text">
                <p>女孩</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>個性</p>
              </li>
              <li className="MKdetail-text">
                <p>兩隻都很親人、會主動討摸呼嚕</p>
              </li>
            </ul>
          </div>
          <div className="MKdetail-btn">
            <div className="" type="submit">
              <div>
                {/* <Mailto
                  email={adoptPage.email}
                  subject="認養文"
                  body="您好，方便跟你預約時間嗎？"
                > */}
                <button className="button-G">
                  <span className="MailBtn">
                    <AiFillMail />
                  </span>
                  私信飼主
                </button>
                {/* </Mailto> */}
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Comments */}
      <div>
        {/* <div className="MKrowComment">
          <div className="MKcomm">
            <div className="MKcom-header">
              <h6 className="MKcom-header-title">留言板</h6>
            </div>
            <div className="MKcomment">
              <div className="MKcom-box">
                <div className="MKcom-avatar">
                  <div className="MKcom-avatar">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="MKcom-user">
                  <div className="MKcom-name">
                    <p>我是貓奴</p>
                  </div>
                  <div className="MKcom-msn">
                    <h6>Hi,想和你約時間看小呆</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="MKcomment">
              <div className="MKcom-box">
                <div className="MKcom-avatar">
                  <div className="MKcom-avatar">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="MKcom-user">
                  <div className="MKcom-name">
                    <p>小呆僕人</p>
                  </div>
                  <div className="MKcom-msn">
                    <h6>好呀，這週六可以嗎？</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="MKcomment">
              <div className="MKcom-box">
                <div className="MKcom-avatar">
                  <div className="MKcom-avatar">
                    <img src={'ComAvatar2'} alt="" />
                  </div>
                </div>
                <div className="MKcom-user">
                  <div className="MKcom-name">
                    <p>我是貓奴</p>
                  </div>
                  <div className="MKcom-msn">
                    <h6>okay</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="MKcommBtn">
            <div className="MKcomButton" type="submit">
              <div>
                <button id="MKcard-btn">我要回覆</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Comments currentUserId="1" />
    </>
  )
}

export default withRouter(AdoptPageFakeData)
