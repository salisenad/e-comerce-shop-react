import React, { Fragment, useState, useEffect }  from 'react';
import Header from '../Layout/header/Header';
import { getCart } from '../cart-helper/cartHelper';
import OrderService from '../../../services/order-service';
import Swal from "sweetalert2";
import { Redirect, Route, Link } from 'react-router-dom';
import Home from '../Home';

const http = new OrderService();
const Checkout = (props)  => {
    const [run, setRun] = useState(false);
    const [items, setItems] = useState([]);
    const initalFormState = {id: '', firstName: '', email: '', lastName: ''}
    const [order, setOrder] = useState(initalFormState)


    let shippingValue = 12.50;
    let taxValue = 7.55;
    useEffect(() => {
        setItems(getCart());
    },[run])


    const handleInputChange = event => {
      const {name, value} = event.target
      setOrder({...order, [name]: value})
    }


      const subTotalPrice = () => {
        var totalPrc = 0;
        items.map(items =>{
          totalPrc += (items.price *  items.count)
        })
        return totalPrc
    }

  const createOrderData = {
    id: order.id,
    firstName: order.firstName,
    lastName: order.lastName,
    email: order.email,
    totalPrice: (Number( subTotalPrice() + shippingValue + taxValue).toFixed(2) ),
    products:  items,

};


    const clickSubmit = event => {
      event.preventDefault();
      http.createOrder(createOrderData).then(data => {
        console.log('order qe pe qoj', createOrderData)
        console.log('order qe pe qoj', createOrderData)
        console.log('order qe pe qoj', createOrderData)

        Swal.fire({title: "Order Success",icon: "success",text: "You Ordered Successfully",
           timer: 5000})
           localStorage.setItem('cart', JSON.stringify([]));

          //  localStorage.removeItem('cart');
           props.history.push("/");

       });
      };
      
    const billingDetails = () => {
      return (
          <div className="col-sm-12 border mt-4 p-5">
               <h3 className="mb-5 font-weight-bold">Billing Address</h3>
              <div className="row">
              <div className="form-group col-sm-6">
                  <label>First Name</label>
                  <input type="hidden" name="id" onChange={handleInputChange} placeholder="First Name" className="form-control"/>

                  <input type="text" name="firstName" onChange={handleInputChange} placeholder="First Name" className="form-control"/>
              </div>
              <div className="form-group  col-sm-6">
                  <label>Last Name</label>
                  <input type="text" name="lastName" onChange={handleInputChange} placeholder="Last Name" className="form-control"/>
              </div>
              <div className="form-group  col-sm-12">
                  <label>Email</label>
                  <input type="text" name="email"  onChange={handleInputChange} placeholder="Write Your Email" className="form-control"/>
              </div>
              </div>
          </div>

      )
    }


    const yourOrder = () => {
        return (
            <div className="col-sm-12 border p-5 mt-4 mb-5">
               <h3 className="mb-5 font-weight-bold">Your Order</h3>
              <div className="row border-bottom mb-4">
              <div className="col-sm-6 font-weight-bold">Product</div>
              <div className="col-sm-6 text-right font-weight-bold">Total</div>
              </div>
              <div className="row mt-3 border-bottom">
            {items.map(item =>
                <Fragment>
                <div className="col-sm-8 mb-3">{item.title} <b>×</b>  {item.count}</div>
                <div className="col-sm-4 text-right">€{Number(item.price * item.count).toFixed(2)}</div>
                </Fragment>
                )}
              </div>

              <div className="row border-bottom mt-3 mb-4">
              <div className="col-sm-6 font-weight-bold">Subtotal</div>
              <div className="col-sm-6 text-right float-right">€{Number(subTotalPrice()).toFixed(2)}</div>
              <div className="col-sm-6 font-weight-bold mt-2">Shipping</div>
              <div className="col-sm-6 text-right float-right mt-3">€{Number(shippingValue).toFixed(2)}</div>
              <div className="col-sm-6 font-weight-bold mb-3 mt-2">Tax</div>
              <div className="col-sm-6 text-right float-right mb-3 mt-3">€{Number(taxValue).toFixed(2)}</div>
              </div>
              
              <div className="row">
              <div className="col-sm-6 font-weight-bold mb-3 h3 mt-2">Total</div>
              <div className="col-sm-6 text-right float-right mb-3 h5 mt-3 font-weight-bold">
                €{Number( subTotalPrice() + shippingValue + taxValue).toFixed(2) }
                </div>
              </div>
              <div className="mt-5">
               <button className="btn btn-success btn-block btn-xl p-3 h3 font-weight-bold" href="/" >
                 Place Order
                 </button>
              </div>
          </div>
        )
    }

        return ( 
            <Fragment>
              <Header setRun={setRun} run={run} items={JSON.parse(localStorage.getItem('cart'))}/>
                <div className="container fluid ">
                    <div className="container mt-5 position-absolute">
                        <h2 className="font-weight-bold" style={{marginTop: '8%'}}>Checkout</h2>
                        <form className="mb-3 " onSubmit={clickSubmit}>

                        <div className="row mt-5">

                            <div className="col-sm-7">
                                {billingDetails()}
                            </div>
                            <div className="col-sm-5">
                                    {yourOrder()}
                            </div>
                        </div>
                        </form>

                    </div>
                </div>
            </Fragment>
         );
}
 
export default Checkout;