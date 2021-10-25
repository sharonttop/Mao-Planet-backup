import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogPic1 from '../images/BlogPic1_250x250.jpg'

function BlogSection(props) {
  return (
    <>
      <Container fluid className="d-flex blogSection">
        <Link to="/bloglist" className="col-12 col-md-5 mr-1 blogIntro">
          <div className="row col blogIntroPic">
            <div>
              <img src={BlogPic1} height="150" alt="" />
            </div>
            <div className="row col blogIntroText">
              <h6>養貓新手必備知識</h6>
              <p>
                這篇文章是寫給家中有一歲以內的幼貓、或是準備新養貓的新手家長們看的，希望能解除大家心中的疑惑、充實醫療保健相關的知識，讓新手貓奴們升級成更稱職的毛孩爸媽！
              </p>
            </div>
          </div>
        </Link>
        <div className="col-12 col-md-5 ml-1 blogIntro">
          <div className="row col blogIntroPic">
            <div>
              <img src={BlogPic1} height="150" alt="" />
            </div>
            <div className="row col blogIntroText">
              <h6>如何幫狗狗選擇美容店？</h6>
              <p>
                寵物美容院比比皆是，目前寵物美容業並沒有公定的標準規定，多是靠自主經營或寵物美容老師傳授，毛爸毛媽該如何選擇，才能保障自己和毛孩的權益呢？
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="d-flex justify-content-center btnSection">
        <Link to="/bloglist">
          <Button variant="outline-primary" className="blogBtn">
            看更多文章
          </Button>
        </Link>
      </div>
    </>
  )
}

export default BlogSection
