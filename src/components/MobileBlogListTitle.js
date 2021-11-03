import React from 'react'
import '../Styles/BlogListTitle.scss'

const MobileBlogListTitle = (props) => {
  return (
    <div className="m-ACBlogListTitle-container p-0">
      <span className="m-ACBlogListTitle">
        {props.children}&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </div>
  )
}

export default MobileBlogListTitle
