import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import BlogPic1 from '../images/BlogPic1_150x150.jpg'
import BlogPic2 from '../images/BlogPic2_150x150.jpg'
import '../Styles/BlogSection.scss'

function BlogSection(props) {
  return (
    <>
      <div className="container-fluid blogSection">
        <Link to="/bloglist" className="col-md-5 mx-2 my-3 px-0 blogIntro">
          <div className="row">
            <div className="col-md-4 blogIntroPic">
              <img src={BlogPic1} alt="" />
            </div>
            <div className="col blogIntroText">
              <h6>養貓新手必備知識</h6>
              <p>
                這篇文章是寫給家中有一歲以內的幼貓、或是準備新養貓的新手家長們看的，希望能解除大家心中的疑惑，充實醫療保健相關的知識，讓新手貓奴們升級成更稱職的毛孩爸媽！
              </p>
            </div>
          </div>
        </Link>
        <Link to="/bloglist" className="col-md-5 mx-2 my-3 px-0 blogIntro">
          <div className="row">
            <div className="col-md-4 blogIntroPic">
              <img src={BlogPic2} alt="" />
            </div>
            <div className="col blogIntroText">
              <h6>如何幫狗狗選擇美容店？</h6>
              <p>
                寵物美容院比比皆是，目前寵物美容業並沒有公定的標準規定，多是靠自主經營或寵物美容老師傳授，毛爸毛媽該如何選擇，才能保障自己和毛孩的權益呢？
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="d-flex justify-content-center btnSection mb-5">
        <Link to="/bloglist">
          <Button variant="outline-primary" className="YellowOutlineBtn">
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

export default BlogSection
