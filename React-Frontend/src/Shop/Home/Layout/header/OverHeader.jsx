import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OverHeader extends Component {
    render() { 
        return ( 
            <div className="container-fluid over-header position-fixed over-navbar-position  p-2" >
                    <div className="row">
                        <div className="col-md-12  ">
                            <div className="row">
                            <Link className="text-white ml-5  cursor-pointer" to="/about-us">About Us</Link>
                            <Link className="text-white ml-3 mr-5 cursor-pointer" to="/contact-us">Contact</Link>
                            <div className="text-white ml-5 cursor-pointer">
                             <Link className=" text-white cursor-pointer" to="/login"> Admin Login</Link>   
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
         );
    } 
}
 
export default OverHeader;