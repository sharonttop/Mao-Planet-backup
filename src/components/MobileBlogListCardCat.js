import React from 'react'
import { Container } from 'react-bootstrap'
import MobileBlogListCard from './MobileBlogListCard'
import CAT_ARTICLES from '../blog-local-json/blog-list.json'
import '../Styles/BlogListCardSection.scss'

function MobileBlogListCardCat(props) {
  const catArticles = CAT_ARTICLES['CAT_ARTICLES']
  return (
    <>
      <Container className="p-0 d-md-block d-none d-flex justify-content-center">
        <div className="ACblogList-container">
          <div className="ACblogListCard">
          {catArticles.map((item) => {
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

export default MobileBlogListCardCat
