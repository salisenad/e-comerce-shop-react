import React, { Component, Fragment, useEffect, useState } from 'react';
import "./Product.css";
import ProductService from "../../../services/product-service";
import {  getCart } from '../cart-helper/cartHelper';
import Card from './Card';

const http = new ProductService();
const productWaiting = []
const Product = (product)  =>{
  const [run, setRun] = useState(false);

const [rediredt, setRedirect] = useState(false);
const [items, setItems] = useState([]);

const [productsArrived, setProducts] = useState([]);
    useEffect(() => {
      loadProducts();
      setItems(getCart());
      // localStorage.setItem('cart', JSON.stringify(cart))
      // productList();
    }, [run]);
  
  
   const loadProducts = () => {
        http.getProducts().then(data => {
            if(data.error) {
              console.log(data.error);
            }else {
              setProducts(data)
            }
        })
    }


               

        return (
            <Fragment>
                <div className="container ">
                    <h4 className="text-center mb-5">Products</h4>
                    <div className="row">
                    {productsArrived.map((product,  i )=> (
                       
                            <div className="col-sm-4  mb-5" key={i}>
                      <Card product={product}   cartUpdate={true}/>
               
            </div>  
                     ) ) }
                    </div>
                </div>
                
                
            </Fragment>

          );
    
}
 
export default Product;