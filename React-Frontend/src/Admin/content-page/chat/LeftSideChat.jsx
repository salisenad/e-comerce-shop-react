import React, { Component } from 'react';
import './ChatsMessage.css';

class LeftSideChat extends Component {
    render() { 
        return (
     <div className="col-sm-4 border-chat" style={{maxHeight: '550px', overflowY:'scroll', overflowX: 'hidden'}}>
            <div className="row p-2">
                <div style={{maxWidth: '20%'}}>
                   <h4 className="col-sm-3 h4 text-primary">Recent</h4>
                </div>
                   <div className="float-right col-md-6"><input className="search-filter ml-5" value="Search" type="text"/></div>
            </div>
            <div className="left-side">
              <div className="border-chat p-2 row bg-color">
                  <div className=" float-left "style={{maxWidth: '11%'}} >
                      <img className=" " style={{maxWidth: '100%'}} src="https://ptetutorials.com/images/user-profile.png" alt=""/>                   
                  </div>
                  <div className="float-right" style={{maxWidth: '80%'}}>
                      <h6 className="ml-3">Senad Sali<span className="float-right date-size">April 28</span></h6> 
                      <p className="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>
              <div className="border-chat p-2 row">
                  <div className=" float-left "style={{maxWidth: '11%'}} >
                      <img className=" " style={{maxWidth: '100%'}} src="https://ptetutorials.com/images/user-profile.png" alt=""/>                   
                  </div>
                  <div className="float-right" style={{maxWidth: '80%'}}>
                      <h6 className="ml-3">Senad Sali<span className="float-right date-size">April 28</span></h6> 
                      <p className="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>
              <div className="border-chat p-2 row">
                  <div className=" float-left "style={{maxWidth: '11%'}} >
                      <img className=" " style={{maxWidth: '100%'}} src="https://ptetutorials.com/images/user-profile.png" alt=""/>                   
                  </div>
                  <div className="float-right" style={{maxWidth: '80%'}}>
                      <h6 className="ml-3">Senad Sali<span className="float-right date-size">April 28</span></h6> 
                      <p className="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>
              <div className="border-chat p-2 row">
                  <div className=" float-left "style={{maxWidth: '11%'}} >
                      <img className=" " style={{maxWidth: '100%'}} src="https://ptetutorials.com/images/user-profile.png" alt=""/>                   
                  </div>
                  <div className="float-right" style={{maxWidth: '80%'}}>
                      <h6 className="ml-3">Senad Sali<span className="float-right date-size">April 28</span></h6> 
                      <p className="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>
              <div className="border-chat p-2 row">
                  <div className=" float-left "style={{maxWidth: '11%'}} >
                      <img className=" " style={{maxWidth: '100%'}} src="https://ptetutorials.com/images/user-profile.png" alt=""/>                   
                  </div>
                  <div className="float-right" style={{maxWidth: '80%'}}>
                      <h6 className="ml-3">Senad Sali<span className="float-right date-size">April 28</span></h6> 
                      <p className="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>
              <div className="border-chat p-2 row">
                  <div className=" float-left "style={{maxWidth: '11%'}} >
                      <img className=" " style={{maxWidth: '100%'}} src="https://ptetutorials.com/images/user-profile.png" alt=""/>                   
                  </div>
                  <div className="float-right" style={{maxWidth: '80%'}}>
                      <h6 className="ml-3">Senad Sali<span className="float-right date-size">April 28</span></h6> 
                      <p className="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>
              <div className="border-chat p-2 row">
                  <div className=" float-left "style={{maxWidth: '11%'}} >
                      <img className=" " style={{maxWidth: '100%'}} src="https://ptetutorials.com/images/user-profile.png" alt=""/>                   
                  </div>
                  <div className="float-right" style={{maxWidth: '80%'}}>
                      <h6 className="ml-3">Senad Sali<span className="float-right date-size">April 28</span></h6> 
                      <p className="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>
           </div>
         </div>
          );
    }
}
 
export default LeftSideChat;