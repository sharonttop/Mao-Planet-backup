import React from 'react'
import { Container } from 'react-bootstrap'
import BlogListBanner from '../../components/BlogListBanner'
import BlogListTag from '../../components/BlogListTag'
import BlogListTitle from '../../components/BlogListTitle'
import BlogListCardSection from '../../components/BlogListCardSection'
import Pagination from '../../components/Pagination'
import './BlogList.scss'

function BlogList(props) {
  //   const { auth } = props
  return (
    <>
      <Container fluid className="p-0">
        <BlogListBanner />
      </Container>

      <div id="ACblogTagSection">
        <BlogListTag>熱門文章</BlogListTag>
        <BlogListTag>所有文章</BlogListTag>
        <BlogListTag>狗奴必知</BlogListTag>
        <BlogListTag>貓奴必知</BlogListTag>
      </div>

      <div>
        <BlogListTitle>
          所有文章&nbsp;&nbsp;&nbsp;&nbsp;All Articles
        </BlogListTitle>
      </div>
      <div>
        <BlogListCardSection />
      </div>
      <div>
        <Pagination />
      </div>

      <div>
        <BlogListTitle>
          狗奴必知&nbsp;&nbsp;&nbsp;&nbsp;Dog Person
        </BlogListTitle>
      </div>
      <div>
        <BlogListCardSection />
      </div>
      <div>
        <Pagination />
      </div>

      <div>
        <BlogListTitle>
          貓奴必知&nbsp;&nbsp;&nbsp;&nbsp;Cat Person
        </BlogListTitle>
      </div>
      <div>
        <BlogListCardSection />
      </div>
      <div>
        <Pagination />
      </div>
    </>
  )
}

export default BlogList
