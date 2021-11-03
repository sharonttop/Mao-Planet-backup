import React from 'react'
import BlogListBN from '../images/BlogList/BlogListBN_1200x600.jpg'
import '../Styles/BlogListBanner.scss'

function BlogListBanner() {
  return (
    <>
      <div className="ACblogListBanner p-0">
        <div className="ACblogListBanner-left">
          <img src={BlogListBN} alt="" />
        </div>
        <div className="ACblogListBanner-right">
          <div className="ACblogListBanner-text">
            <h2>鏟屎官大補帖</h2>
            <p>
              身為狗奴、貓奴的你
              <br />
              不可不知的毛孩大小事
            </p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="m-ACblogListBanner">
        <div className="m-ACblogListBanner-text">
          <h2>鏟屎官大補帖</h2>
          <p>
            身為狗奴、貓奴的你
            <br />
            不可不知的毛孩大小事
          </p>
        </div>
      </div>
    </>
  )
}

export default BlogListBanner
