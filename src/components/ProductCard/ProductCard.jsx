import "./styles.css"

// Images
import shoeImage from "./../../assets/images/nike19.png"
import CardHeader from "./CardHeader/CardHeader";



const ProductCard = ({product}) => {

	//Validação condicional com recurso a IF/Else
	//Retorna o elemento span com texto especifico (Não usem assim fica feio)
	const isInStock = (inStock) => {
	
		if(inStock){
			return <span>Buy</span>
		} 
	
		return <span>Sold Out</span>
	}

	return (
		<div className="product-card">
			<div className="card-body">

				{/* Componente Card Header - recebe 3 props - {brandLogo, price, brandName} */}
				<CardHeader 
					brandLogo={product.brandLogo} 
					brandName={product.brandName}
					price={product.price}
				/>

				<div className="main-content">
					{product.name && <h2 className="title">AIR STRUCTURE 1</h2>}
					
					<p className="description">
						From the Flymesh upper to the triple-density foam midsole, the Nike
						Air Zoom Structure 19 Men's Running Shoe offers plenty of support
						and the response you need for a smooth, stable ride that feels ultra
						fast.
					</p>
				</div>

				<span className="text-effect">AIR</span>
			</div>

			<div className="main-image">
				<img
					src={shoeImage}
					alt="Best Shoes in the world"
					className="featured-image"
				/>
			</div>

			<div className="card-footer">
				<button className="btn-buy">{isInStock(product.inStock)}</button>
				<span className="product-category">Men Running Shoes</span>
			</div>
		</div>
	);
};

export default ProductCard;
