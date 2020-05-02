import React, { Fragment, Suspense } from 'react';
import './App.css';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './Shop/Home/Home';
import Login from './Auth/Login';
import AdminDashboard from './Admin/AdminDashboard';
import AboutUs from './Shop/Home/about-us/AboutUs';
import ContactUs from './Shop/Home/contact-us/ContactUs';
import ViewCart from './Shop/Home/checkout/ViewCart';
import Checkout from './Shop/Home/checkout/Checkout';

function App() { 
  const AdminRouter = ({ component: Component, ...props }) => {
    return (
      <Route 
      {...props}
      render={innerProps =>
      localStorage.getItem("Token") ? (
        <Component {...innerProps} />
          ) : (
        <Redirect 
          to={{
          pathname: '/login',
          state: { from: props.location}}}
        />  
      )
      }
      />
    );
  }
  return (
    <Fragment>
      <Suspense fallback="loading">
        <BrowserRouter>
              <Switch>
                <Route  path="/" exact component={Home}/>
                <Route path="/login" exact component={Login} />
                <Route path="/about-us" exact component={AboutUs} />
                <Route path="/contact-us" exact component={ContactUs} />
                <Route path="/view-cart" exact component={ViewCart} />
                <Route path="/checkout" exact component={Checkout} />
                <AdminRouter path="/dashboard" exact component={AdminDashboard}/>  
              </Switch>
          </BrowserRouter>
      </Suspense>

      
    </Fragment>


  );
}

export default App;
