//Styles
import "./App.css";

//Componentes
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
	//Terminar obejeto com dados dinamicos
	
	//Objeto de Produto
	const product = {
		productName: "Lalala",
		price: 200,
		brandName: "Nike",
		brandLogo: "https://i.ibb.co/q7RKcZk/nike.png",
		inStock: true
	}

	//Renderização condicional comm recurso a &&
	// Caso o product não exista o product card não vai ser renderizado 
	return product && <ProductCard product={product} />
}

export default App;
