import React, { Component, Fragment, useState, useEffect } from 'react';
import Header from '../Layout/header/Header';
import './Checkout.css'
import { getCart, removeItem, addItem, subString } from '../cart-helper/cartHelper';
import { Link } from 'react-router-dom';
const ViewCart = () => {
    const [name, setName] = useState("");

    const [run, setRun] = useState(false);
    const [items, setItems] = useState([]);

    let shippingValue = 12.50;
    let taxValue = 7.55;
    useEffect(() => {
        setItems(getCart());

    },[run])

    const showNoProductsView = () => {
        return (
        <div className=" mt-5">
            <h4 className="">No Items In Cart</h4>
           <Link className="btn btn-success h4 mt-3" to="/">{'<'} Continue Shopping </Link>
        </div>
        )
    }

      const totalPrice = () => {
          var totalPrc = 0;
          items.map(items =>{
            totalPrc += items.price *  items.count
          })
          return totalPrc
      }


    const addToCart = (item) => {
        addItem(item);
      };

      const subStringFromCart = (item) => {
        subString(item);
      };
      


    const cartTotal = () => {
        return (
            <div>
                <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="offset-sm-7"></div>
                    <div className="col-sm-5 border-style p-5">
                        <h3 className="font-weight-bold mb-4">Cart Totals</h3>
                    <p className="font-weight-bold h6 mt-4">Subtotal price <span className="float-right">€{Number(totalPrice()).toFixed(2)}</span> </p>
                    <hr className="border"/>
                <p className="font-weight-bold h6 mt-4">Shipping 
                <span className="float-right">€{Number(shippingValue).toFixed(2)}
                </span> </p>
                <p className="font-weight-bold h6 mt-4 mb-4">Tax <span className="float-right">€{Number(taxValue).toFixed(2)}</span> </p>
                <hr className="border"/>
                <p className="font-weight-bold h4 mt-4">Total <span className="float-right">€{Number( totalPrice() + shippingValue + taxValue).toFixed(2) }</span> </p>
                    <div className="mt-5">
                        <Link className="btn btn-success btn-block btn-xl p-3 h3 font-weight-bold"  to="/checkout">Checkout</Link>
                    </div>
                    </div>
                </div>
                </div>
                )
            
            </div>
        )
    }

    const itemsList = () => {
        return (
            <tbody >
            {items.map(item => 
               <tr key={item.id} >
               <th style={{width:'15%'}}>
                   <img src={item.imgUrl} style={{width: '100%'}} alt=""/>
               </th>
               <td  className="align-middle ">{item.title} <br/> <p style={{fontSize: '12px'}}>{item.description}</p></td>
               <td  className="align-middle ">€{Number(item.price).toFixed(2)}</td>
                <td  className="align-middle ">
                <div className="row " >
                <button className="btn ml-3 btn-outline-secondary btn-sm"  onClick={() =>{subStringFromCart(item) ;setRun(!run);} }>-</button>
                <div className="p-1">{item.count}</div>
                <button className="btn btn-outline-success btn-sm" onClick={() =>{addToCart(item) ;setRun(!run);} }>+</button>
                </div>
                </td>
                <td  className="align-middle ">€{Number(item.price * item.count).toFixed(2)}</td>
               <td  className="align-middle ">
                   <button className="btn btn-outline-danger btn-sm" onClick={() => {removeItem(item.id); setRun(!run); }}>X</button>
               </td>
               </tr> 
                ) }
        </tbody>
        
        )
    }
    return (
        <Fragment>
            <Header setRun={setRun} run={run} items={JSON.parse(localStorage.getItem('cart'))}/>
           <div className="container-fluid position-absolute">
                <div className="container">
                    <h2 className="table-position font-weight-bold">Shopping cart</h2>
                    {items.length > 0 ? 
                    <div>
                    <table class="table border-style mt-5">
                    <thead style={{backgroundColor: '#f7f7f7'}}>
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Product</th>
                        <th  scope="col">Price</th>
                        <th  scope="col">Quantity</th>
                        <th  scope="col">Total</th>
                        <th  scope="col"></th>

                        </tr>
                    </thead>
                   {itemsList()}
                    </table>
                    {cartTotal()}
                    </div>: showNoProductsView()}
                    
                </div>
            </div> 
        </Fragment>
    )
}
export default ViewCart