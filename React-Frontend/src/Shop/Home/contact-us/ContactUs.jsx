import React, { Component, Fragment, useState } from "react";
import Header from "../Layout/header/Header";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";
import ContactUsService from "../../../services/contactUs-service";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const http = new ContactUsService()
  const  ContactUs = () => {
    const [run, setRun] = useState(false);
    const initalFormState = {id: '', customerName: '', customerEmail: '' , customerMessage: ''}
    const [contactUs, setContactUs] = useState(initalFormState)
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


    const handleInputChange = event => {
      const {name, value} = event.target
      setContactUs({...contactUs, [name]: value})
    }
    const clickSubmit = event => {
      event.preventDefault();
            http.createContactUs(contactUs).then(data => {
        console.log('contactus qe pe qoj', contactUs)
          successNotify()
          window.location.href = '/'

       });
      };

      const successNotify = () => {toast.success('Message sent successfully!')}


      return (
        <Fragment>
        <Header setRun={setRun} run={run}
        items={JSON.parse(localStorage.getItem('cart'))}/>
        <div className="container-fluid position-absolute" style={{'marginTop': '13%'}}>

        <div className="container">
            <div className="border p-5">
            <h3 className="text-center">Contact Us</h3>
            <form autoComplete="off" onSubmit={clickSubmit} className="col-md-6 mb-5 offset-md-3  "
            >
                <div className="form-group">
                  <label>First and last name</label>
                <input className="form-control" style={{width: "100%"}} onChange={handleInputChange}
                    id="custom-css-outlined-input" name="customerName" placeholder="First And Last Name"
                    margin="normal"
                />
                </div>
                <div className="form-group">
                  <label>Email</label>
                <input className="form-control" style={{width: "100%"}} onChange={handleInputChange}
                    id="custom-css-outlined-input" name="customerEmail" placeholder="Email"
                    margin="normal"
                />
                </div>
                <div className="form-group" >
                  <label>Send us a message</label>
                <textarea className="form-control" style={{width: "100%", marginTop: "25px" }} name="customerMessage" onChange={handleInputChange}
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