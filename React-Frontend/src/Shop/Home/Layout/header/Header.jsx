import React, {  Fragment, useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import OverHeader from './OverHeader';
import CategoriesService from "../../../../services/category-service";
import { Link } from 'react-router-dom';
import { getCart, removeItem } from '../../cart-helper/cartHelper';
import { toast} from 'react-toastify';
import './Header.css'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const http = new CategoriesService();
  const Header = ({items,
    setRun = f => f, run = undefined})  =>{
    const [categories , setCategories] = useState([])
    const [productOnCart, setItems] = useState([]);

      useEffect(() => {
       loadCategories();
       setItems(getCart());

    }, []);


    const findTotalProductsCount = () => {
      var countList = []
      var totalCount = 0
      items.map(items =>{
        countList.push(items.count);
      })
      countList.map(count => {
        totalCount += count
      })
      return totalCount
    };

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
    
    const shippingExample = () => {
      var shippingValue = 12.50;
      return shippingValue
    }
    const taxExample = () => {
      var taxValue = 7.55;
      return taxValue
    }

  const noItemsMessage = () => (
    <div className="p-5">
    <h5>
        Your cart is empty! <br /> 
        {} 
    </h5>
    </div>
);

 const  loadCategories = () => {
    http.getCategories().then(data => {
      setCategories(data)
    })
  }
  
 
  const cartList = () => (
    <div className="cart-count-position dropleft">
                <i className="fa  fa-shopping-cart mt-3 h3 text-white cursor-pointer " 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </i> 
                <span className="position-absolute mt-2  mr-1 font-weight-bold counting-shop  bg-white">
                     {findTotalProductsCount()}
                </span> 
                <div class="dropdown-menu dropdown-size">
                    {items.length > 0 ? items.map(item => 
                        <div className="row p-3 ">
                        <div className="col-sm-4">
                            <div>
                            <img src={item.imgUrl} alt="" style={{width: '100%'}}/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h6>{item.title}</h6>
                            <p style={{fontSize: '14px'}}>{item.description}</p>
                            <p>{item.count} x <b>€{Number(item.price).toFixed(2)}</b> </p>
                        </div>
                        <div className="col-sm-2">
                          <div className="mr-2">
                            <button onClick={() => { removeItem(item.id); setRun(!run); }}
                              className="btn btn-outline-danger mr-1 mt-2 mb-2">X
                             </button>
                            </div>  
                        </div>
                       
                        </div>
                    ) : noItemsMessage()}
                     {items.length > 0 ?
                       <div className="container border-top mb-3">
                        <div className="row mt-3 mb-4">
                          <div className="col-sm-12 ">
                            <div className="float-left">
                             <b>Subtotal</b> 
                            </div>
                            <div className="float-right">
                            €{Number(findSubTotalPrice()).toFixed(2)}
                            </div>
                         </div>
                          <div className="col-sm-12">
                            <div className="float-left mt-2">
                               <b>Shipping</b> 
                            </div>
                            <div className="float-right mt-2">
                                €{Number(shippingExample()).toFixed(2)}
                            </div>
                          </div> 
                          <div className="col-sm-12">
                            <div className="float-left mt-2">
                               <b>Tax</b> 
                            </div>
                            <div className="float-right mt-2">
                                €{Number(taxExample()).toFixed(2)}
                            </div>
                          </div> 
                          <div className="col-sm-12 mb-3">
                            <div className="float-left mt-2">
                               <b>Total</b> 
                            </div>
                            <div className="float-right mt-2">
                               <b>€{Number(findSubTotalPrice() + shippingExample() + taxExample()).toFixed(2) }</b> 
                            </div>
                          </div>
                          <div className="col-sm-6 ">
                          <Link className="btn btn-outline-light bg-secondary text-white float-right" to="/view-cart" style={{width:' 100%'}}>View Cart</Link>
                          </div>
                          <div className="col-sm-6 ">
                          <Link className="btn btn-success float-left" style={{width:' 100%'}}>Checkout</Link>
                          </div>

                        </div>
                        </div>
                         : ''} 
                </div>
            </div>
  )

 const categoriesList = () => (
    <div className="container-fluid bg-danger navbar-mobile shadow-header position-fixed navbar-position ">
              <div className="row  ">
                  <div className="col-sm-12 row position-up-header">
                       <Navbar bg="danger" expand="lg">
                          <img className="logo-png mr-3 ml-3" style={{width: "4%"}} src="https://i.ya-webdesign.com/images/camera-logos-png-1.png" alt=""></img>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                      <Nav.Link  className="text-white mr-2 ml-3">
                                        <Link className="text-white" to="/">Home</Link> 
                                        </Nav.Link>
                                      {categories.map(category => 
                                      <NavDropdown  className="mr-2" key={category.id} title={category.categoryName} id="basic-nav-dropdown">
                                          {category.childCategory.map(childCategories => 
                                          <NavDropdown.Item className="" key={childCategories.id}>{childCategories.childName}</NavDropdown.Item>
                                          )}
                                      </NavDropdown>
                                      ) }
                                </Nav>
                            </Navbar.Collapse>
                       </Navbar>
                            {cartList()}
                                </div>
                </div>
            </div>
  )

        return (
          <Fragment> 
            <OverHeader />
            {categoriesList()}
           </Fragment>
         );
}
 
export default Header;