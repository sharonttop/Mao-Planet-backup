import React from 'react'
import { Container } from 'react-bootstrap'
import MobileBlogListCard from './MobileBlogListCard'
import '../Styles/BlogListCardSection.scss'

function MobileBlogListCardSection(props) {
  return (
    <>
      <Container className="p-0 d-md-block d-none d-flex justify-content-center">
        <div className="ACblogList-container">
          <div className="ACblogListCard">
            <MobileBlogListCard />
            <MobileBlogListCard />
            <MobileBlogListCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default MobileBlogListCardSection
