const ProductHeader = (props) => {
 
    return ( 
        <div className="card-header">
        <div className="brand">
            <img src={props.brandLogo} alt={props['brandName']}/> 
        </div>
        <div className="price">
            <span>{props.brandPrice.toFixed()}€</span>
        </div>
        </div>
    )

}

export default ProductHeader;