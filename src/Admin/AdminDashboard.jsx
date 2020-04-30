import React, { Component  } from 'react';
import './AdminDashboard.scss'
import AdminSidebar from './sidebar/Sidebar';
import AdminHeader from './header/Header';
// import ContentPage from './content-page/ContentPage';
import { BrowserRouter } from 'react-router-dom';
import ContentPages from './content-page/ContentPage';


class AdminDashboard extends Component {
  
  
    render() { 
    
        return ( 
            <BrowserRouter>
                <AdminHeader/>
                <div className="col-md-12 row"> 
                <div className="col-md-2 col-sm-1">
                <AdminSidebar/>
                </div>
                <div className="col-md-10 col-sm-11 mt-5">
                <ContentPages/>
                </div>
                </div>
            </BrowserRouter>
      
         );
    }
}

 
export default AdminDashboard;
