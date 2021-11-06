import '../Styles/ProductListTag.scss'


const ProductListTag = (props)=>{
    return(
        <>
            <button className="AG-ProductListTag">{props.children}</button>
        </>
    )
}

export default ProductListTag;