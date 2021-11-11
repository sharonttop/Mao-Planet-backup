import React from 'react'
import { Container } from 'react-bootstrap'
import MobileBlogListCard from './MobileBlogListCard'
import ALL_ARTICLES from '../blog-local-json/blog-list.json'
import '../Styles/BlogListCardSection.scss'

function MobileBlogListCardAll(props) {
  const allArticles = ALL_ARTICLES['ALL_ARTICLES']
  return (
    <>
      <Container className="p-0 d-md-block d-none d-flex justify-content-center">
        <div className="ACblogList-container">
          <div className="ACblogListCard">
          {allArticles.map((item) => {
              return (
                <>
                  <MobileBlogListCard
                    ArticleImg={item.URL}
                    ArticleTitle={item.title}
                    ArticleDescription={item.description}
                  />
                </>
              )
            })}
          </div>
        </div>
      </Container>
    </>
  )
}

export default MobileBlogListCardAll
