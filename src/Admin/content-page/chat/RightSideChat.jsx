import React, { Component, Fragment } from 'react';

class RightSideChat extends Component {
    render() { 
        return ( 
            <Fragment>
                    <div className="col-sm-8 " >
                        {/* first row */}
                        <div style={{maxHeight: '550px', overflowY: 'scroll', overflowX:'hidden'}}>
                        <div className="row mt-5">
                            <div className="col-sm-8 d-flex  p-2">
                                <div style={{maxWidth: '15%'}}>
                                    <img className="ml-2" style={{maxWidth: '100%'}} src="https://ptetutorials.com/images/user-profile.png" alt=""/>
                                </div>
                                <div className="ml-3" style={{width:'100%'}}>
                                    <p className="p-2" style={{backgroundColor: '#ebebeb', borderRadius:'4px'}}> Lorem ipsum dolor sit amet consecte lorem lorem</p>
                                    <span className="ml-1" style={{color:'#747474'}}> 11:01 AM | Yesterday</span>
                                </div>
                            </div>
                                <div className="col-sm-4"></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-7"></div>
                            <div className="col-sm-5 text-white   p-2">
                                <p className="font-weight-bold bg-danger rounded p-2">Lorem ipsum lorem lorem</p>
                                <span  style={{color:'#747474'}}> 11:01 AM | Yesterday</span>
                            </div>
                        </div>
                        
                        {/* second row */}


                        <div className="row mt-5">
                            <div className="col-sm-8 d-flex  p-2">
                                <div style={{maxWidth: '15%'}}>
                                    <img className="ml-2" style={{maxWidth: '100%'}} src="https://ptetutorials.com/images/user-profile.png" alt=""/>
                                </div>
                                <div className="ml-3" style={{width:'100%'}}>
                                    <p className="p-2" style={{backgroundColor: '#ebebeb', borderRadius:'4px'}}> Lorem ipsum dolor sit amet consecte lorem lorem</p>
                                    <span className="ml-1" style={{color:'#747474'}}> 11:01 AM | Yesterday</span>
                                </div>
                            </div>
                                <div className="col-sm-4"></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-7"></div>
                            <div className="col-sm-5 text-white   p-2">
                                <p className="font-weight-bold bg-danger rounded p-2">Lorem ipsum lorem lorem</p>
                                <span  style={{color:'#747474'}}> 11:01 AM | Yesterday</span>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-sm-8 d-flex  p-2">
                                <div style={{maxWidth: '15%'}}>
                                    <img className="ml-2" style={{maxWidth: '100%'}} src="https://ptetutorials.com/images/user-profile.png" alt=""/>
                                </div>
                                <div className="ml-3" style={{width:'100%'}}>
                                    <p className="p-2" style={{backgroundColor: '#ebebeb', borderRadius:'4px'}}> Lorem ipsum dolor sit amet consecte lorem lorem</p>
                                    <span className="ml-1" style={{color:'#747474'}}> 11:01 AM | Yesterday</span>
                                </div>
                            </div>
                                <div className="col-sm-4"></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-7"></div>
                            <div className="col-sm-5 text-white   p-2">
                                <p className="font-weight-bold bg-danger rounded p-2">Lorem ipsum lorem lorem</p>
                                <span  style={{color:'#747474'}}> 11:01 AM | Yesterday</span>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div style={{width: '90%'}}>
                            <input placeholder="Type a message" className="p-2" type="text" style={{border:'none', width: '100%'}}/>
                            </div>
                            <div>
                                <button className="p-3 bg-primary cursor-pointer"  style={{ border: 'none', borderRadius: '50%'}}><i class="fa fa-paper-plane-o text-white" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
             </Fragment>
         );
    }
}
 
export default RightSideChat;