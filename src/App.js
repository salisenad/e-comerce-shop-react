import React, { Fragment, Suspense } from 'react';
import './App.css';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './Shop/Home/Home';
import Login from './Auth/Login';
import AdminDashboard from './Admin/AdminDashboard';

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
                <AdminRouter path="/dashboard" exact component={AdminDashboard}/>  
                {/* <AdminRouter path="/product" exact={true} component={ProductPages} />
                <AdminRouter path="/category" exact={true} component={CategoryPage} />         */}
              </Switch>
          </BrowserRouter>
      </Suspense>

      
    </Fragment>


  );
}

export default App;
