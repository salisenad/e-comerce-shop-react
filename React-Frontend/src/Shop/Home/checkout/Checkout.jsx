import React, { Fragment, useState, useEffect }  from 'react';
import Header from '../Layout/header/Header';
import { getCart } from '../cart-helper/cartHelper';
import { Link } from 'react-router-dom';


const Checkout = ()  => {
    const [run, setRun] = useState(false);
    const [items, setItems] = useState([]);
    let shippingValue = 12.50;
    let taxValue = 7.55;
    useEffect(() => {
        setItems(getCart());

    },[run])

    const findSubTotalPrice = () => {
        var priceList = []
        var subTotalPrice = 0;
        items.map(items => {
          priceList.push(items.price)
        })
        priceList.map(prices => {
          subTotalPrice += prices
        })
        return subTotalPrice
      }

      const totalPrice = () => {
        var totalPriceList = []
        var totalPrc = 0;
        items.map(items =>{
          totalPriceList.push(items.price *  items.count)
        })
        totalPriceList.map(prices =>{
          totalPrc += prices
        })
        return totalPrc
    }

    const billingDetails = () => {
      return (
          <div className="col-sm-12 border p-5">
               <h3 className="mb-5 font-weight-bold">Billing Address</h3>
              <div className="row">
              <div className="form-group col-sm-6">
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" className="form-control"/>
              </div>
              <div className="form-group  col-sm-6">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" className="form-control"/>
              </div>
              <div className="form-group  col-sm-12">
                  <label>Email</label>
                  <input type="text" placeholder="Write Your Email" className="form-control"/>
              </div>
              </div>
          </div>
      )
    }


    const yourOrder = () => {
        return (
            <div className="col-sm-12 border p-5 mb-5">
               <h3 className="mb-5 font-weight-bold">Your Order</h3>
              <div className="row border-bottom mb-4">
              <div className="col-sm-6 font-weight-bold">Product</div>
              <div className="col-sm-6 text-right font-weight-bold">Total</div>
              </div>
              <div className="row mt-3 border-bottom">
            {items.map(item =>
                <Fragment>
                <div className="col-sm-7 mb-3">{item.title} × {item.count}</div>
                <div className="col-sm-5 text-right">€{Number(item.price * item.count).toFixed(2)}</div>
                </Fragment>
                // <div className="col-sm-4 text-right">{item.price}</div>
                )}
              </div>

              <div className="row border-bottom mt-3 mb-4">
              <div className="col-sm-6 font-weight-bold">Subtotal</div>
              <div className="col-sm-6 text-right float-right">€{Number(findSubTotalPrice()).toFixed(2)}</div>
              <div className="col-sm-6 font-weight-bold mt-2">Shipping</div>
              <div className="col-sm-6 text-right float-right mt-3">€{Number(shippingValue).toFixed(2)}</div>
              <div className="col-sm-6 font-weight-bold mb-3 mt-2">Tax</div>
              <div className="col-sm-6 text-right float-right mb-3 mt-3">€{Number(taxValue).toFixed(2)}</div>
              </div>
              
              <div className="row">
              <div className="col-sm-6 font-weight-bold mb-3 h3 mt-2">Total</div>
              <div className="col-sm-6 text-right float-right mb-3 h5 mt-3 font-weight-bold">€{Number( totalPrice() + shippingValue + taxValue).toFixed(2) }</div>
             
              </div>
              <div className="mt-5">
                        <Link className="btn btn-success btn-block btn-xl p-3 h3 font-weight-bold"  to="/checkout">Place Order</Link>
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
                    
                        <div className="row mt-5">
                            <div className="col-sm-7">
                                {billingDetails()}
                            </div>
                            <div className="col-sm-5">
                                    {yourOrder()}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
         );
}
 
export default Checkout;