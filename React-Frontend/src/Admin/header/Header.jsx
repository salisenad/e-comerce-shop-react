import React, { Component, Fragment } from 'react';
import './Header.css'
class AdminHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.removeItem("Token");
    localStorage.removeItem('username');
    localStorage.removeItem("");
    window.location.href = '/login'
  }

  takeUserName() {
    const name = localStorage.getItem("username")
    return name
  }
    navBarList = () => {
        return (
          <div>
             <nav  className="navbar p-3 navbar-expand-lg navbar-light " style={{'zIndex': '', backgroundColor: 'black'}}>
                <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav ">
                    <a className="nav-item nav-link text-navbar mr-5" href="#">Welcome <strong>{localStorage.getItem('Username')} </strong> </a> 
                    <a className="nav-item nav-link text-navbar  cursor-pointer" onClick={this.onLogout.bind(this)}><b>Logout</b></a>
                  </div>
                </div>
             </nav>
         </div>
        )
    }

    render() { 
        return ( 
        <Fragment>
            {this.navBarList()}
        </Fragment>
        );
    }
}
 
export default AdminHeader;