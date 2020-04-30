import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        return ( 
        
          <footer className="container-fluid bg-black py-5 border-top mt-4 " style={{backgroundColor: 'black'}}>
          <div className="row">
              <div className="col-12 col-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false">
                      <title>Producsssst</title>
                      <circle className="text-white" cx="12" cy="12" r="10"/>
                      <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
                  </svg>
                  <small className="d-block mb-3 text-white bg-w ">&copy; 2020</small>
              </div>
              <div className="col-6 col-md">
                  <h5 className="text-white">Features</h5>
                  <ul className="list-unstyled text-small">
                      <li><a className="text-white" href="#">Cool stuff</a></li>
                      <li><a className="text-white" href="#">Random feature</a></li>
                      <li><a className="text-white" href="#">Team feature</a></li>
                      <li><a className="text-white" href="#">Stuff for developers</a></li>
                      <li><a className="text-white" href="#">Another one</a></li>
                      <li><a className="text-white" href="#">Last time</a></li>
                  </ul>
              </div>
              <div className="col-6 col-md">
                  <h5 className="text-white">Resources</h5>
                  <ul className="list-unstyled text-small">
                      <li><a className="text-white " href="#">Resource</a></li>
                      <li><a className="text-white " href="#">Resource name</a></li>
                      <li><a className="text-white " href="#">Another resource</a></li>
                      <li><a className="text-white " href="#">Final resource</a></li>
                  </ul>
              </div>
              <div className="col-6 col-md">
                  <h5 className="text-white">Resources</h5>
                  <ul className="list-unstyled text-small">
                      <li><a className="text-white" href="#">Business</a></li>
                      <li><a className="text-white" href="#">Education</a></li>
                      <li><a className="text-white" href="#">Government</a></li>
                      <li><a className="text-white" href="#">Gaming</a></li>
                  </ul>
              </div>
              <div className="col-6 col-md">
                  <h5 className="text-white">About</h5>
                  <ul className="list-unstyled text-small">
                      <li><a className="text-white" href="#">Team</a></li>
                      <li><a className="text-white" href="#">Locations</a></li>
                      <li><a className="text-white" href="#">Privacy</a></li>
                      <li><a className="text-white" href="#">Terms</a></li>
                  </ul>
              </div>
          </div>
      </footer>
         );
    }
}
 
export default Footer;