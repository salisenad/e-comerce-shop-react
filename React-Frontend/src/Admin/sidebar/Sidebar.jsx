import React, { Component, Fragment } from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';


class AdminSidebar extends Component {

 
    render() { 
        return (  
            
          <Fragment>
            <div className="sidenav position-absolute" style={{minHeight: '100vh', width: '90%'}}>
                <Link  className="text-white" to="/dashboard">Dashboard</Link>
                <Link  className="text-white" to="/orders">Orders</Link>
                <Link  className="text-white" to="/product">Product</Link>
                <Link  className="text-white" to="/carousel">Carousel</Link>
                <Link  className="text-white" to="/category">Category</Link>
                <Link  className="text-white" to="/childCategory">Sub Category</Link>
                <Link  className="text-white" to="/chat">Chat</Link>


            </div>
        </Fragment>
        );
    }
}
 
export default AdminSidebar;