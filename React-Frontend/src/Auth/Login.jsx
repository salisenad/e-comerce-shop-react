import React, { Component, Fragment } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";
import Header from "../Shop/Home/Layout/header/Header";
import './Login.css'
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
  class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showPassword: false,
        username: "Admin",
        password: "admin"
      };
      this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
      this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleClickShowPassword() {
      this.setState({ showPassword: !this.state.showPassword });
    }
    handleMouseDownPassword(e) {
      e.preventDefault();
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
      localStorage.setItem("Username", this.state.username);
    }
  
    handleSubmit(e) {
      const token = "tjdhd96826492749026269296428692904277272";
      e.preventDefault();
      const { username, password } = this.state;
      if ((username === "Admin" && password === "admin") ||
        (username === "Client" && password === "client") ||
        (username === "Test" && password === "test")
      ) {
        Swal.fire({title: "Login",icon: "success",text: "You Successfully loggedin",
           timer: 5000});
          localStorage.setItem("Token", token);
          localStorage.setItem("Username" ,username);
          this.redirect();
      } else {
        Swal.fire({title: "Login Error",icon: "error",text: "Check your email and password !!",
          showConfirmButton: false,timer: 5000
        });
      }
    }
  
    componentDidMount() {
      this.redirect();
    }
  
    redirect() {
      if (localStorage.getItem("Token")) {
        this.props.history.push("/dashboard");
        window.location.reload();
      }else {
        // this.props.history.push('/dashboard');
        // window.location.reload();
      }
    }
  
    render() {
      const { username, password } = this.state;
      const isEnabled = username.length > 0 && password.length > 0;
      return (
          <Fragment>
          <Header items={JSON.parse(localStorage.getItem('cart') )}/>
      <div className="container-fluid position-absolute" style={{'marginTop': '13%'}}>
        <div className="container">
          <div className="border p-5">
          <hr></hr>
            <h3 className="text-center">Admin Administration Login</h3>
            <form autoComplete="off" className="col-md-6 offset-md-3  "
             onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <CssTextField style={{width: "100%"}}
                  id="custom-css-outlined-input" label="Email"
                  margin="normal"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group" >
                <CssTextField style={{width: "100%", marginTop: "25px" }}
                  id="standard-adornment-password"
                  label="Password"
                  className="lol"
                  type={this.state.showPassword ? "text" : "password"}
                  margin="normal"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <span
                  className="full"
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword} >
                  {this.state.showPassword ? (
                    <Visibility className="" />
                      ) : ( 
                    <VisibilityOff className="" />
                  )}
                </span>
                <button type="submit" value="Login"  disabled={!isEnabled}
                className="btn mt-4 bg-success float-right text-white font-weight-bold"> LOGIN
              </button>
              </div>
  
            
            </form>
          </div>
        </div>

        </div>

        </Fragment>
      );
    }
  }
  
  export default Login;