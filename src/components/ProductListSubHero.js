import '../Styles/ProductListSubHero.scss'

const ProductListSubHero = ({subHero}) => {
    return(
        <div className="AG-subHero">
            <div className="AG-subText">
                <h2>貓貓玩具</h2>
                <h3>家裡沙發的是日救星！</h3>
                <h3>促進奴才與主子的關係</h3>
                <h3>材質安全無毒，主子開心，奴才放心。</h3>
            </div>
            <div className="AG-subImg">
                <img src={subHero}></img>
            </div>
        </div>
    )
}

export default ProductListSubHero;