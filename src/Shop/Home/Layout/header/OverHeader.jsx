import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OverHeader extends Component {
    render() { 
        return ( 
            <div className="container-fluid over-header position-fixed over-navbar-position  p-2" >
                    <div className="row">
                        <div className="col-md-12  ">
                            <div className="row">
                            <div className="text-white ml-5  cursor-pointer">About Us</div>
                            <div className="text-white ml-3 mr-5 cursor-pointer">Kontakte</div>
                            <div className="text-white ml-5 cursor-pointer">
                             <Link className=" text-white" to="/login"> Login or Register</Link>   
                            </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6 col-sm-3">
                        </div> */}
                    </div>
            </div>
         );
    } 
}
 
export default OverHeader;