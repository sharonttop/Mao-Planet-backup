import React, { useState, useEffect } from 'react'
import './HotelList.scss'

import HotelListBanner from './hotellist-banner_300x300.jpg'
import { withRouter } from 'react-router-dom'
import HotelCards from './HotelCard'
import Carousel from './Carousel'

import { BsSearch } from 'react-icons/bs'
import Axios from 'axios'

function HotelList() {
  const [hotelList, setHotelList] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:3002/api/gethotellist').then((response) => {
      setHotelList(response.data)
    })
  }, [])
  return (
    <>
      <>
        {/* Banner */}
        <>
          <div className="MKbanner">
            <div className="MKbanner-left">
              <img src={HotelListBanner} alt="" />
            </div>
            <div className="MKbanner-right">
              <div className="MKbanner-text">
                <h2>GO澡堂</h2>
                <p>
                  在這裏讓毛孩享受
                  <br />
                  專屬的度假天堂！
                </p>
              </div>
            </div>
          </div>
        </>
        {/* RWD Banner */}
        <>
          <div className="MKRWD-banner">
            <div className="MKrwd-banner-text">
              <p>毛孩假期</p>
              <br />
              <h5>
                在這裏讓毛孩享受
                <br />
                <br />
                專屬的度假天堂！
              </h5>
            </div>
          </div>
        </>
        {/* filter */}
        <>
          <div className="MKrowFilter">
            <div className="MKadopt-filter">
              <div className="MKfilter">
                <div className="MKselector ">
                  <p>地區</p>
                  <select name="" className="MKad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">台北</option>
                    <option value="">新北</option>
                    <option value="">桃園</option>
                    <option value="">台南</option>
                    <option value="">台中</option>
                    <option value="">高雄</option>
                  </select>
                </div>
                <div className="MKselector ">
                  <p>價錢</p>
                  <select name="" className="MKad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">500~1500</option>
                    <option value="">1500~2500</option>
                    <option value="">2500~5000~</option>
                  </select>
                </div>
                <div className="MKselector ">
                  <p>服務</p>
                  <select name="" className="MKad-filter">
                    <option value="">---請選擇---</option>
                    <option value="">修剪毛髮</option>
                    <option value="">美容清潔</option>
                    <option value="">疫苗注射</option>
                  </select>
                </div>
                <div className="MKselector ">
                  <button className="MKsearch-btn" type="submit">
                    {/* <i className="fas fa-search"></i> */}
                    <BsSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* map */}
        <>
          <div className="MKrow-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.8517337052526!2d121.51392975777993!3d25.047523761341026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1634912525150!5m2!1szh-TW!2stw"
              loading="lazy"
            ></iframe>
          </div>
        </>
        {/* HotelCardList */}
        <HotelCards />
        {/* pagination */}
        {/* <Carousel /> */}
      </>
    </>
  )
}

export default withRouter(HotelList)
