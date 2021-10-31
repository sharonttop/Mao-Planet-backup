import React from 'react'
import BlogListBN from '../images/BlogListBN_1200x600.jpg'
import '../Styles/BlogListBanner.scss'

function BlogListBanner() {
  return (
    <>
      <div className="banner">
        <div className="banner-left">
          <img src={BlogListBN} alt="" />
        </div>
        <div className="banner-right">
          <div className="banner-text">
            <h1>鏟屎官大補帖</h1>
            <p>
              身為狗奴、貓奴的你
              <br />
              不可不知的毛孩大小事
            </p>
          </div>
        </div>
      </div>
      {/* RWD-BANNER */}
      <div className="RWD-banner">
        <div className="rwd-banner-text">
          <p>毛孩找家</p>
          <br />
          <h5>
            你的一眼瞬間
            <br />
            <br />
            就讓我有了被愛的機會
          </h5>
        </div>
      </div>
    </>
  )
}

export default BlogListBanner
