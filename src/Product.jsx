import "./Product.css";
import Price from "./price";

function Product({title}) {
  return (
    <div className="product" >
      <h4>{title}</h4>
      <p>description</p>
      <Price/>
    </div>
  );
}

export default Product;
