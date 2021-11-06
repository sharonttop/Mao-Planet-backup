import React from 'react'
import { Container } from 'react-bootstrap'
import BlogListBanner from '../../components/BlogListBanner'
import BlogHotTopicSection from '../../components/BlogHotTopicSection'
import BlogListTag from '../../components/BlogListTag'
import BlogListTitle from '../../components/BlogListTitle'
import BlogListCardSection from '../../components/BlogListCardSection'
import Pagination from '../../components/Pagination'
// import MyFooter from '../../components/MyFooter'

import MobileBlogHotTopic from '../../components/MobileBlogHotTopic'
import MobileBlogListTitle from '../../components/MobileBlogListTitle'
import MobileBlogListCardSection from '../../components/MobileBlogListCardSection'
import './BlogList.scss'

function BlogList(props) {
  //   const { auth } = props
  return (
    <>
      <Container fluid className="p-0">
        <BlogListBanner />
      </Container>

      <Container className="p-0">
        <div id="ACblogTagSection">
          <BlogListTag>熱門文章</BlogListTag>
          <BlogListTag>所有文章</BlogListTag>
          <BlogListTag>狗奴必知</BlogListTag>
          <BlogListTag>貓奴必知</BlogListTag>
        </div>
      </Container>

      {/* PC-hotTopic */}
      <Container className="p-0">
        <BlogHotTopicSection />
      </Container>

      {/* mobile-hotTopic */}
      <Container>
        <MobileBlogHotTopic />
      </Container>

      {/* PC-All */}
      <Container className="p-0 d-md-block d-none">
        <div>
          <BlogListTitle>
            所有文章&nbsp;&nbsp;&nbsp;&nbsp;All Articles
          </BlogListTitle>
        </div>
        <div>
          <BlogListCardSection className="d-md-block d-none" />
        </div>
      </Container>

      {/* mobile-All */}
      <Container className="p-0 d-md-none d-block">
        <div>
          <MobileBlogListTitle>
            所有文章&nbsp;&nbsp;All Articles
          </MobileBlogListTitle>
        </div>
        <div>
          <MobileBlogListCardSection className="d-md-none d-block" />
        </div>
      </Container>

      {/* PC mobile共用 */}
      <div>
        <Pagination />
      </div>

      {/* PC-Dog */}
      <Container className="p-0 d-md-block d-none">
        <div>
          <BlogListTitle>
            狗奴必知&nbsp;&nbsp;&nbsp;&nbsp;Dog Person
          </BlogListTitle>
        </div>
        <div>
          <BlogListCardSection />
        </div>
      </Container>

      {/* mobile-Dog */}
      <Container className="p-0 d-md-none d-block">
        <div>
          <MobileBlogListTitle>
            狗奴必知&nbsp;&nbsp;Dog Person
          </MobileBlogListTitle>
        </div>
        <div>
          <MobileBlogListCardSection className="d-md-none d-block" />
        </div>
      </Container>

      {/* PC mobile共用 */}
      <div>
        <Pagination />
      </div>

      {/* PC-Cat */}
      <Container className="p-0 d-md-block d-none">
        <div>
          <BlogListTitle>
            貓奴必知&nbsp;&nbsp;&nbsp;&nbsp;Cat Person
          </BlogListTitle>
        </div>
        <div>
          <BlogListCardSection />
        </div>
      </Container>

      {/* mobile-Cat */}
      <Container className="p-0 d-md-none d-block">
        <div>
          <MobileBlogListTitle>
            貓奴必知&nbsp;&nbsp;Cat Person
          </MobileBlogListTitle>
        </div>
        <div>
          <MobileBlogListCardSection className="d-md-none d-block" />
        </div>
      </Container>

      {/* PC mobile共用 */}
      <div className="ACblogLastSec">
        <Pagination />
      </div>
      {/* <MyFooter /> */}
    </>
  )
}

export default BlogList
