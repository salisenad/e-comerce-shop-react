import React, {  Fragment, useState } from "react";

import './AboutUs.css'
import Header from "../Layout/header/Header";

  const AboutUs = () => {
    const [run, setRun] = useState(false);

      return (
        <Fragment>
            <Header setRun={setRun} run={run}
            items={JSON.parse(localStorage.getItem('cart'))}/>
            <div className="container-fluid position-absolute" style={{'marginTop': '13%'}}>
                <div className="container">
                <div className="border row p-5">
                    <div className="col-sm-6" >
                        <h2 >About Us</h2>
                        <hr className="about-us-border-bottom float-left"/><br/>
                        <div  style={{width: '60%'}}>
                            <div> <br/>
                                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.
                            </div> <br/><br/>
                            <div>
                                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem   
                            </div><br/> <br/>
                        </div>
                    </div>            
                    <div className="col-sm-6">
                       <h5>Work with heart</h5>
                       <div>
                             Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.
                       </div><br/><br/>
                       <h5>Reliable services</h5>
                       <div>
                       Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt
                       </div><br/><br/>
                       <h5>Great Support</h5>
                       <div>
                       Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.
                       </div>
                    </div>
                </div>
                </div>
            </div>
        
        </Fragment>
      );
  }
  
  export default AboutUs;