const ProductMain = (props) => {
    //console.log(props);
  return (
    <>
      <h2 className="title">{props.productTitle}</h2>
      <p className="description">{props.productDesc}</p>
    </>
  );
};

export default ProductMain;


