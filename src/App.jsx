import './App.css'
import ProductCard from './components/ProductCard/ProductCard'

function App() {
  //Terminar Objeto

  //Array com 3 produtos

  function RenderingArrayOfObjects() {
    const data = [
        
      {
        productName: "1",
        brandName: "Nike Shoe",
        brandPrice: 120,
        brandLogo: "https://i.ibb.co/q7RKcZk/nike.png",
        inStock: false
      },
      {
        productName: "2",
        brandName: "Nike Shoe",
        brandPrice: 120,
        brandLogo: "https://i.ibb.co/q7RKcZk/nike.png",
        inStock: false
      },
      {
        productName: "3",
        brandName: "Nike Shoe",
        brandPrice: 120,
        brandLogo: "https://i.ibb.co/q7RKcZk/nike.png",
        inStock: false
      }

    ]
    const listItems = data.map(
      (product) => {
          return (
            product && <ProductCard product = {product}/>
              
          )
      }
  )



  /*
  const product = {
    //productName: "33",
    brandName: "Nike Shoe",
    brandPrice: 120,
    brandLogo: "https://i.ibb.co/q7RKcZk/nike.png",
    inStock: false
  }*/
}

}

export default App
