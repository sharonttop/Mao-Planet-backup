import React from 'react'
// import { Container } from 'react-bootstrap'
import CAT_ARTICLES from '../blog-local-json/blog-list.json'
import BlogListCard from './BlogListCard'
import '../Styles/BlogListCardSection.scss'

const BlogListCardCat = () => {
  const catArticles = CAT_ARTICLES['CAT_ARTICLES']
  return (
    <>
      <div className="p-0 d-md-block d-none d-flex justify-content-center">
        <div className="ACblogList-container">
          <div className="ACblogListCard">
            {catArticles.map((item) => {
              return (
                <>
                  <BlogListCard
                    ArticleImg={item.URL}
                    ArticleTitle={item.title}
                    ArticleDescription={item.description}
                  />
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogListCardCat
