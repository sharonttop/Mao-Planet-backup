import "../Styles/ProductListTitle.scss"

const ProductListTitle = ({subTitle,engTitle})=>{
    return(
        <div className="AG-title-container">
            <span>_________________</span>
            <span className="AG-productListTitle">{subTitle}&nbsp;&nbsp;&nbsp;&nbsp;{engTitle}</span>
            <span>_________________</span>
        </div>
    )
}

export default ProductListTitle;