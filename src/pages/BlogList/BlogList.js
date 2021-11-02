import React from 'react'
import BlogListBanner from '../../components/BlogListBanner'
import BlogListTag from '../../components/BlogListTag'
import BlogListTitle from '../../components/BlogListTitle'

function BlogList(props) {
  //   const { auth } = props
  return (
    <>
      <BlogListBanner />
      <div className="ACBlogTagSection">
        <BlogListTag>熱門文章</BlogListTag>
        <BlogListTag>所有文章</BlogListTag>
        <BlogListTag>狗奴必知</BlogListTag>
        <BlogListTag>貓奴必知</BlogListTag>
      </div>
      <div>
        <BlogListTitle>
          所有文章&nbsp;&nbsp;&nbsp;&nbsp;All  Articles
        </BlogListTitle>
      </div>
      <div>
        <BlogListTitle>
          狗奴必知&nbsp;&nbsp;&nbsp;&nbsp;Dog Person
        </BlogListTitle>
      </div>
      <div>
        <BlogListTitle>
          貓奴必知&nbsp;&nbsp;&nbsp;&nbsp;Cat Person
        </BlogListTitle>
      </div>
    </>
  )
}

export default BlogList
