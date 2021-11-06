import React from 'react'
import '../Styles/BlogListTag.scss'

const BlogListTag = (props) => {
  return (
    <>
      <button class="ACblogListTag d-md-block d-none">{props.children}</button>
    </>
  )
}

export default BlogListTag
