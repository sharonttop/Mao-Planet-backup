import "../Styles/ProductListTitle.scss"

const ProductListTitle = ({subTitle,engTitle})=>{
    return(
        <div className="AG-title-container">
            <span>___________</span>
            <span className="AG-productListTitle">{subTitle}&ensp;{engTitle}</span>
            <span>___________</span>
        </div>
    )
}

export default ProductListTitle;