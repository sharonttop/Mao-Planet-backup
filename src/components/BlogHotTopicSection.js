import React from 'react'
import { Container } from 'react-bootstrap'
import BlogHotTopicCarousel from './BlogHotTopicCarousel'

function BlogHotTopicSection(props) {
  return (
    <>
      <Container className="my-5 d-md-block d-none p-0">
        <BlogHotTopicCarousel />
      </Container>
    </>
  )
}

export default BlogHotTopicSection
