import React, { Component , Fragment} from 'react';
import '../AdminDashboard.scss'
import {  Route,Redirect,} from 'react-router-dom';
import CategoryPage from './category-page/CategoryPages';
import CarouselPage from './carousel-page/CarouselPage';
import ChildCategories from './child-categories/ChildCategories';
import ProductPages from './product-page/ProductPages';
import ChartDatas from './chart/Chart';
import ChatMessage from './chat/ChatMessage';
import Orders from './orders/Orders';

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
          pathname: '/',
          state: { from: props.location}}}
        />  
      )
      }
      />
    );
  }

class ContentPages extends Component {

    render() {  
      
        return (  
          <Fragment>
             <AdminRouter exact path="/category" component={CategoryPage}/>
             <AdminRouter exact path="/product" component={ProductPages}/>
             <AdminRouter exact path="/carousel" component={CarouselPage}/>
             <AdminRouter exact path="/childCategory" component={ChildCategories}/>
             <AdminRouter exact path="/dashboard" component={ChartDatas}/>
             <AdminRouter exact path="/chat" component={ChatMessage}/>
             <AdminRouter exact path="/orders" component={Orders}/>

          </Fragment>
         );
    }
}
 
export default ContentPages;