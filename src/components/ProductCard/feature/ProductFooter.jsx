const productStock = (inStock)  => {
    if(inStock){
      return "Buy"
    }
    return "Sold Out"
  }
  
const ProductFooter = (props) => {
  return (
    <>
      <button className="btn-buy">{productStock(props.inStock)}</button>
      <span className="product-category">Men Running Shoes</span>
    </>
  );
};

export default ProductFooter;
