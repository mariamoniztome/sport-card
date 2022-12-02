import "./styles.css"

const CardHeader = (props) => {

 //Props é um objeto:
// {brandLogo: string, brandName: string, price: number}
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
				{/* Exemplo de utilização de funções de Numeros dentro do JSX */}
				<span>{props.price.toFixed()}€</span>
			</div>
		</div>
	);
};

export default CardHeader
