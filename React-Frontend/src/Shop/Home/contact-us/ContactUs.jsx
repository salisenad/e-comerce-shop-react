import React, { Component, Fragment, useState } from "react";
import Header from "../Layout/header/Header";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/core/styles";

  const  ContactUs = () => {
    const [run, setRun] = useState(false);
    const CssTextField = withStyles({
      root: {
        "& label.Mui-focused": {
          color: "#1B1B23",
          opacity: "0.6",
          fontSize: "18px",
          letterSpacing: "0.2px"
        },
        "& label": {
          marginLeft: "5px",
          fontSize: "18px",
          marginTop: "-6px"
        },
    
        "& .MuiInput-underline:after": {
          borderBottomColor: "#B71C1C",
          outline: 0
        },
    
        "& .MuiInput-underline:before": {
          borderBottomColor: "#B71C1C"
        },
        "& .MuiInput-underline:hover": {
          borderBottomColor: "#B71C1C"
        }
      }
    })(TextField);
      return (
        <Fragment>
        <Header setRun={setRun} run={run}
        items={JSON.parse(localStorage.getItem('cart'))}/>
        <div className="container-fluid position-absolute" style={{'marginTop': '13%'}}>
        <div className="container">
            <div className="border p-5">
            <h3 className="text-center">Contact Us</h3>
            <form autoComplete="off" className="col-md-6 mb-5 offset-md-3  "
            >
                <div className="form-group">
                <CssTextField style={{width: "100%"}}
                    id="custom-css-outlined-input" label="Name"
                    margin="normal"
                />
                </div>
                <div className="form-group">
                <CssTextField style={{width: "100%"}}
                    id="custom-css-outlined-input" label="Email"
                    margin="normal"
                />
                </div>
                <div className="form-group" >
                <textarea style={{width: "100%", marginTop: "25px" }}
                    className="lol"
                    placeholder="Send us a message"
                    type='text'
                    margin="normal"
                />
                <button
                className="btn mt-4  mb-4 bg-success float-right text-white font-weight-bold"> Send
                </button>
                </div>
            </form>
            </div>
          </div>
        </div>

      </Fragment>
      );
  }
  
  export default ContactUs;