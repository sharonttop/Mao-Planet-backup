import '../Styles/ChangePageButton.scss'

const ChangePageButton = () => {
  return (
    <div className="buttonContainer">
      <a href="#" className="previous">
        &lt;
      </a>
      <a href="#" className="page">
        1{' '}
      </a>
      <a href="#" className="page">
        2
      </a>
      <a href="#" className="next">
        &gt;
      </a>
    </div>
  )
}

export default ChangePageButton
