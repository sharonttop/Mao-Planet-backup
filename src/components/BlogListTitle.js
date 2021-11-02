import '../Styles/BlogListTitle.scss'


const BlogListTitle = (props) => {
  return (
    <div className="ACBlogListTitle-container">
      <span>_________________</span>
      <span className="ACBlogListTitle">
      {props.children}&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span>_________________</span>
    </div>
  )
}

export default BlogListTitle
