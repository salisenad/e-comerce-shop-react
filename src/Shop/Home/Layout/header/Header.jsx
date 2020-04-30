import React, { Component, Fragment } from 'react';
import './Header.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import OverHeader from './OverHeader';
import CategoriesService from "../../../../services/category-service";
import { Link } from 'react-router-dom';

const http = new CategoriesService();
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {categories: [] , cart: 1}
   
    this.categoriesList = this.categoriesList.bind(this);
    this.loadCategories();
  }

  loadCategories = () => {
    http.getCategories().then(data => {
      this.setState({categories: data});
      console.log('categories', data);
    })
  }
  componentDidMount() {

  }
  componentDidUpdate() {
    const cart =  localStorage.getItem('cart').length
        
             this.setState({
              cart: cart
             })
         
  }


  categoriesList = () => (
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
                                      {this.state.categories.map(category => 
                                      <NavDropdown  className="mr-2" key={category.id} title={category.categoryName} id="basic-nav-dropdown">
                                          {category.childCategory.map(childCategories => 
                                          <NavDropdown.Item className="" key={childCategories.id}>{childCategories.childName}</NavDropdown.Item>
                                          )}
                                      </NavDropdown>
                                      ) }
                                </Nav>
                            </Navbar.Collapse>
                       </Navbar>
                       <div className="cart-count-position">
         <i className="fa  fa-shopping-cart mt-3 h3 text-white cursor-pointer"></i> 
         <span className="position-absolute mt-2  mr-1 font-weight-bold counting-shop  bg-white  ">
           {this.state.cart}</span> 
                  </div>  
                  </div>
                
                </div>
            </div>
  )
  

    render() { 
        return (
          <Fragment> 
            <OverHeader />
            {this.categoriesList()}
           </Fragment>
         );
    }
}
 
export default Header;