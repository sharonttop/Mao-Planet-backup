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
            <iframe></iframe>
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
