import './styles.css'
import shoeImg from './../../img/nike19.png'
import ProductHeader from './feature/ProductHeader'
import ProductMain from './feature/ProductMain'
import ProductFooter from './feature/ProductFooter'


const ProductCard = ({product}) => {
    //let inStock = true;
    return (
        <div className="product-card">
        <div className="card-body">
          <div className="card-header">
            <ProductHeader 
              brandLogo={product.bradLogo}
              brandName={product.brandName}
              brandPrice={product.brandPrice}          
            />
          </div>
          <div className="main-content">
            <ProductMain 
              productTitle="Air Force"
              productDesc="From the Flymesh upper to the triple-density foam midsole, the Nike Air Zoom Structure 19 Men's Running Shoe offers plenty of support and the response you need for a smooth, stable ride that feels ultra fast."         
            />
          </div>
          <span className="text-effect">AIR</span>
        </div>
  
        <div className="main-image">
          <img src={shoeImg} alt="Best Shoes in the world" className="featured-image" />
        </div>
  
        <div className="card-footer">
        <ProductFooter

          inStock={product.inStock}
        
        />
        </div>
      </div>
    )

}

export default ProductCard;