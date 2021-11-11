import React from 'react'
import { Container } from 'react-bootstrap'
import BlogListBanner from '../../components/BlogListBanner'
import BlogHotTopicSection from '../../components/BlogHotTopicSection'
import BlogListTag from '../../components/BlogListTag'
import BlogListTitle from '../../components/BlogListTitle'
import BlogListCardAll from '../../components/BlogListCardAll'
import BlogListCardDog from '../../components/BlogListCardDog'
import BlogListCardCat from '../../components/BlogListCardCat'
import Pagination from '../../components/Pagination'

import MobileBlogHotTopic from '../../components/MobileBlogHotTopic'
import MobileBlogListTitle from '../../components/MobileBlogListTitle'
import MobileBlogListCardAll from '../../components/MobileBlogListCardAll'
import MobileBlogListCardDog from '../../components/MobileBlogListCardDog'
import MobileBlogListCardCat from '../../components/MobileBlogListCardCat'
import './BlogList.scss'

function BlogList(props) {
  //   const { auth } = props
  return (
    <>
      <div className="p-0">
        <BlogListBanner />
      </div>

      <div className="p-0">
        <div id="ACblogTagSection">
          <BlogListTag>熱門文章</BlogListTag>
          <BlogListTag>所有文章</BlogListTag>
          <BlogListTag>狗奴必知</BlogListTag>
          <BlogListTag>貓奴必知</BlogListTag>
        </div>
      </div>

      {/* PC-hotTopic */}
      <div className="p-0">
        <BlogHotTopicSection />
      </div>

      {/* mobile-hotTopic */}
      <div>
        <MobileBlogHotTopic />
      </div>

      {/* PC-All */}
      <Container className="p-0 d-md-block d-none">
        <div>
          <BlogListTitle>
            所有文章&nbsp;&nbsp;&nbsp;&nbsp;All Articles
          </BlogListTitle>
        </div>
        <div>
          <BlogListCardAll className="d-md-block d-none" />
        </div>
      </Container>

      {/* mobile-All */}
      <div className="p-0 d-md-none d-block">
        <div>
          <MobileBlogListTitle>
            所有文章&nbsp;&nbsp;All Articles
          </MobileBlogListTitle>
        </div>
        <div>
          <MobileBlogListCardAll className="d-md-none d-block" />
        </div>
      </div>

      {/* PC mobile共用 */}
      {/* <div>
        <Pagination />
      </div> */}

      {/* PC-Dog */}
      <Container className="p-0 d-md-block d-none">
        <div>
          <BlogListTitle>
            狗奴必知&nbsp;&nbsp;&nbsp;&nbsp;Dog Person
          </BlogListTitle>
        </div>
        <div>
          <BlogListCardDog />
        </div>
      </Container>

      {/* mobile-Dog */}
      <div className="p-0 d-md-none d-block">
        <div>
          <MobileBlogListTitle>
            狗奴必知&nbsp;&nbsp;Dog Person
          </MobileBlogListTitle>
        </div>
        <div>
          <MobileBlogListCardDog className="d-md-none d-block" />
        </div>
      </div>

      {/* PC mobile共用 */}
      {/* <div>
        <Pagination />
      </div> */}

      {/* PC-Cat */}
      <Container className="p-0 d-md-block d-none AClastSec">
        <div>
          <BlogListTitle>
            貓奴必知&nbsp;&nbsp;&nbsp;&nbsp;Cat Person
          </BlogListTitle>
        </div>
        <div>
          <BlogListCardCat />
        </div>
      </Container>

      {/* mobile-Cat */}
      <div className="p-0 d-md-none d-block">
        <div>
          <MobileBlogListTitle>
            貓奴必知&nbsp;&nbsp;Cat Person
          </MobileBlogListTitle>
        </div>
        <div>
          <MobileBlogListCardCat className="d-md-none d-block" />
        </div>
      </div>

      {/* PC mobile共用 */}
      {/* <div className="ACblogLastSec">
        <Pagination />
      </div> */}
    </>
  )
}

export default BlogList
