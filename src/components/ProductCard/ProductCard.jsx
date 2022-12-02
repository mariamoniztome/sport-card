import './styles.css'
import shoeImg from './../../img/nike19.png'
import ProductHeader from './feature/ProductHeader'
import ProductMain from './feature/ProductMain'
import ProductFooter from './feature/ProductFooter'

const ProductCard = () => {
    return (
        <div className="product-card">
        <div className="card-body">
          <div className="card-header">
            <ProductHeader 
              brandLogo = "https://i.ibb.co/q7RKcZk/nike.png"
              brandName = "Nike"
              brandPrice = {120}            
            />
          </div>
          <div className="main-content">
            <ProductMain 
              productTitle = "Air Force"
              productDesc = "From the Flymesh upper to the triple-density foam midsole, the Nike Air Zoom Structure 19 Men's Running Shoe offers plenty of support and the response you need for a smooth, stable ride that feels ultra fast."         
            />
          </div>
          <span className="text-effect">AIR</span>
        </div>
  
        <div className="main-image">
          <img src={shoeImg} alt="Best Shoes in the world" className="featured-image" />
        </div>
  
        <div className="card-footer">
        <ProductFooter
                    />
        </div>
      </div>
    )

}

export default ProductCard;