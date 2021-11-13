import '../Styles/ProductListSubHero.scss'

const ProductListSubHero = ({subHero,title,article}) => {
    return(
        <div className="AG-subHero">
            <div className="AG-subText">
                <h2>{title}</h2>
                <h3>{article}</h3>
            </div>
            <div className="AG-subImg">
                <img src={subHero}></img>
            </div>
        </div>
    )
}

export default ProductListSubHero;