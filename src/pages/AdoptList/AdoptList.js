import React, { useState } from 'react'
import './AdoptList.scss'
import AdoptListBanner from './adoptlist-banner_300x300.jpg'
import { withRouter } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

//Card
import AdoptCards from './AdoptCards'
import { types } from 'sass'

function AdoptList() {
  const [selectType, setSelectType] = useState('')
  const [selectLocation, setSelectLocation] = useState('')
  const [selectGender, setSelectGender] = useState('')
  const handleType = (e) => {
    setSelectType(e.target.value)
  }
  const handleLocation = (e) => {
    setSelectLocation(e.target.value)
  }
  const handleGender = (e) => {
    setSelectGender(e.target.value)
  }
  return (
    <>
      <>
        {/* banner */}
        <>
          <div className="MKbanner">
            <div className="MKbanner-left">
              <img src={AdoptListBanner} alt="" />
            </div>
            <div className="MKbanner-right">
              <div className="MKbanner-text">
                <h2>毛孩找家</h2>
                <p>
                  你的一眼瞬間
                  <br />
                  就讓我有了被愛的機會
                </p>
              </div>
            </div>
          </div>
        </>
        {/* RWD-Banner */}
        <>
          <div className="MKRWD-banner">
            <div className="MKrwd-banner-text">
              <h5>毛孩找家</h5>
              <br />
              <p>
                你的一眼瞬間
                <br />
                <br />
                就讓我有了被愛的機會
              </p>
            </div>
          </div>
        </>
        {/* filter */}
        <>
          <div className="MKrowFilter">
            <div className="MKadopt-filter">
              <div className="MKfilter">
                <div className="MKselector">
                  <p>種類</p>
                  <select
                    value={selectType}
                    className="MKad-filter"
                    onChange={handleType}
                  >
                    <option value="">---請選擇---</option>
                    <option value="貓咪">貓咪</option>
                    <option value="狗狗">狗狗</option>
                  </select>
                </div>
                <div className="MKselector ">
                  <p>地區</p>
                  <select
                    value={selectLocation}
                    className="MKad-filter"
                    onChange={handleLocation}
                  >
                    <option value="">---請選擇---</option>
                    <option value="台北市">台北市</option>
                    <option value="新北市">新北市</option>
                    <option value="台中市">台中市</option>
                  </select>
                </div>
                <div className="MKselector">
                  <p>性別</p>
                  <select
                    value={selectGender}
                    className="MKad-filter"
                    onChange={handleGender}
                  >
                    <option value="">---請選擇---</option>
                    <option value="男孩">男孩</option>
                    <option value="女孩">女孩</option>
                  </select>
                </div>
                <div className=" ">
                  <button className="MKsearch-btn" type="submit">
                    <BsSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* cards */}
        <>
          {/* <AdoptCards petList={currentPosts} loading={loading} /> */}
          <AdoptCards
            selectType={selectType}
            selectLocation={selectLocation}
            selectGender={selectGender}
          />
        </>
      </>
    </>
  )
}

export default withRouter(AdoptList)
