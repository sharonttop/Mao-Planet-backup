import React from 'react'
import '../Styles/BlogListTitle.scss'

const BlogListTitle = (props) => {
  return (
    <div className="ACBlogListTitle-container p-0">
      <span>___________________</span>
      <span className="ACBlogListTitle">
        {props.children}&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span>___________________</span>
    </div>
  )
}

export default BlogListTitle
