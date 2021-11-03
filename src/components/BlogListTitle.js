import '../Styles/BlogListTitle.scss'


const BlogListTitle = (props) => {
  return (
    <div className="ACBlogListTitle-container">
      <span>___________________</span>
      <span className="ACBlogListTitle">
      {props.children}&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span>___________________</span>
    </div>
  )
}

export default BlogListTitle
