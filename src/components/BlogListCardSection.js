import React from 'react'
import { Container } from 'react-bootstrap'
import BlogListCard from './BlogListCard'
import '../Styles/BlogListCardSection.scss'

const BlogListCardSection = () => {
  return (
    <>
      <Container className="p-0 d-md-block d-none d-flex justify-content-center">
        <div className="ACblogList-container">
          <div className="ACblogListCard">
            <BlogListCard />
            <BlogListCard />
            <BlogListCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default BlogListCardSection
