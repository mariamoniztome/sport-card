const ProductHeader = (props) => {
 
    return ( 
        <div className="card-header">
        <div className="brand">
            { props.brandLogo ? (
                <img 
                src={props.brandLogo} 
                alt={props['brandName']}
                /> 
            ) : null }
        
        </div>
        <div className="price">
            <span>{props.brandPrice}€</span>
        </div>
        </div>
    )

}

export default ProductHeader;