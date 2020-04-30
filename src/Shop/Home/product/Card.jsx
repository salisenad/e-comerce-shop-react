import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addItem, updateItem, removeItem } from '../cart-helper/cartHelper';


const Card = ({
  product,
  showAddToCartButton = true,
  cartUpdate = false,
  setRun = f => f,
  run = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

 

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };
  const addToCart = () => {
    addItem(product);
    console.log('produkti qe pe qoj', product)
  };


  const showAddToCartBtn = () => {
    return (
       (
        <button onClick={addToCart} className="btn btn-success float-right mt-2 mb-2 card-btn-1  ">
          Add to cart
        </button>
      )
    );
  };
  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
      )
    );
  };
                 

  return (
    <div className="card p-3 " style={{boxShadow: '0px 2px 9px 0px #0000003b'}}>
                    <div className="min-height-product" >
                         <img className="card-img-top cursor-pointer"  src={product.imgUrl} alt="Product"></img>
                    </div>
                    <div className="border-top">
                        <h5 className="card-title mt-3"> {product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <h5>€{Number(product.price).toFixed(2)}</h5>
                    </div>
                    <div>
                    {showAddToCartBtn(showAddToCartButton)}
                    {showCartUpdateOptions(cartUpdate)}

                    {/* <button className="btn btn-primary col-sm-7 float-right sm">+ Add to cart</button> */}
                    </div>
               </div> 



  );
};

export default Card;
