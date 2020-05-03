import React, {useState, useEffect, Fragment } from 'react';
import OrderService from '../../../services/order-service';


const http = new OrderService()
const Orders = () => {
    const [ordersArrived, setOrders] = useState([])


    useEffect(() =>{
        loadOrders()
    },[])

    const loadOrders = () => {
        http.getOrders().then(data => {
            setOrders(data)
            console.log('data data  orders ', data)
        })
    }

    const orderList = () => {
        const productsList = ordersArrived.map(order => 
                        <tr key={order.id}>
                          <th style={{width: "10%"}}>{order.id}</th>
                          <td style={{width: "20%"}}>{order.firstName}</td>
                          <td style={{width: "20%"}}>{order.lastName}</td>
                          <td style={{width: "20%"}}>{order.email}</td>
                          <td style={{width: '20'}}>
                          {order.products.map(product => 
                                <ul key={product.id}><li>{product.title} x {product.count}</li></ul>
                            )}
                          </td>
                          <td style={{width: "20%"}}>
                          €{Number(order.totalPrice).toFixed(2)}
                          </td>
                        </tr>
                       )
                       return (productsList);
                    }


        return ( 
            <Fragment>
            <div>
                 <h3 className="text-center mb-5 font-weight-bold">Orders</h3>
                <table className="table table-striped table-hover ">
                      <thead> 
                        <tr>
                          <th scope="col">Order Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Product Details</th>
                          <th scope="col">Total Price</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        {orderList()}
                      </tbody>
                  </table>
            </div>
          </Fragment>
         );
}
 
export default Orders;