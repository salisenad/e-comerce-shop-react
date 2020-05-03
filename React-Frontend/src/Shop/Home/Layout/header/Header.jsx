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
    let taxValue = 7.55;
    let shippingValue = 12.50;

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
      var totalPrc = 0;
      items.map(items =>{
        totalPrc += (items.price *  items.count)
      })
      return totalPrc
  }
    

  const noItemsMessage = () => (
    <div className="p-5">
    <h5>Your cart is empty! <br /> </h5>
    </div>
);

 const  loadCategories = () => {
    http.getCategories().then(data => {
      setCategories(data)
    })
  }
  
  const cartList = () => (
    <Fragment>
      <div className="cart-count-position mobile-cart">
        <Link to="/view-cart">
      <i className="fa  fa-shopping-cart mt-3 h3 text-white cursor-pointer " 
                  >
                </i> </Link>
                <span className="position-absolute mt-2  mr-1 font-weight-bold counting-shop  bg-white">
                     {findTotalProductsCount()}
                </span> 
      </div>
    <div className="cart-count-position dropleft medium-cart">
                <i className="fa  fa-shopping-cart mt-3 h3 text-white cursor-pointer " 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </i> 
                <span className="position-absolute mt-2  mr-1 font-weight-bold counting-shop  bg-white">
                     {findTotalProductsCount()}
                </span> 
                <div class="dropdown-menu dropdown-size">
                    {items.length > 0 ? items.map(item => 
                    <div>
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
                              className="btn btn-light btn-sm mr-1 mt-2 mb-2">X
                             </button>
                            </div>  
                        </div>
                       
                        </div>
                        </div>

                        
                    ) : noItemsMessage()}
                     {items.length > 0 ?
                       <div className="container border-top mb-1">
                        <div className=" mt-3 mb-2">
                        <p className="font-weight-bold h6 mt-4">Subtotal <span className="float-right">€{Number(findSubTotalPrice()).toFixed(2)}</span> </p>
                <p className="font-weight-bold h6 mt-4">Shipping 
                <span className="float-right">€{Number(shippingValue).toFixed(2)}
                </span> </p>
                <p className="font-weight-bold h6 mt-4 mb-4">Tax <span className="float-right">€{Number(taxValue).toFixed(2)}</span> </p>
                <p className="font-weight-bold h5 mt-2">Total <span className="float-right">€{Number( findSubTotalPrice() + shippingValue + taxValue).toFixed(2) }</span> </p>
                      <div className="row mt-5 ">
                    <div className="col-sm-6 ">
                          <Link className="btn btn-outline-light bg-secondary text-white float-right" to="/view-cart" style={{width:' 100%'}}>View Cart</Link>
                          </div>
                          <div className="col-sm-6 ">
                          <Link className="btn btn-success float-left" style={{width:' 100%'}} to="/checkout">Checkout</Link>
                          </div> 
                          </div>                             
                        </div>
                        </div>
                         : ''} 
                </div>
            </div>
            </Fragment>
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