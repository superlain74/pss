import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';


import "./register.css";


class Register extends Component {
    static defaultProps = {
        onAuth() {},
        // heading: "Welcome back.",
        // buttonText: "Log in",
        signIn: true,
        // errorMessage: undefined

    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { username, password, email } = this.state;

        axios.post('/api/auth/signup', { username, password, email })
          .then((result) => {
              // TODO
              // Send to another page
              this.props.history.push("/Home");
              console.log(result);
          })
          .catch(() => {
            // TODO
            // Error handling
          });
      }


handleChange(e){
e.preventDefault();
this.setState({[e.target.name]: e.target.value});
}
    // getValues = () => {

    // };

    render() {

        console.log("Props: ", this.props);
        const {email, username, password} = this.state;
        const {signIn} = this.props;
        if(signIn){
        return (
            <div>
                  <nav className="navbar navbar-light bg-danger static-top" style={{height: "110px"}}>
        <div className="container">
            <Link to="/home">
                <img src="./img/pssLogo.png" alt="pssLogo" height="100px"/>
            </Link>

        </div>

    </nav>
                   <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-8 mx-auto">
                        <div className="card border-none">
                            <div className="card-body">
                                <div className="mt-2 text-center">
                                    <h2 style={{color: "white"}}>Create Your Account</h2>
                                </div>
                                <p className="mt-4 text-white lead text-center">
                                    Sign up to get started with Prep Shop & Save!
                                </p>
                                <div className="mt-4">
                          
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <input 
                                            type="username" 
                                            className="form-control" 
                                            name="username" 
                                            value={username}    
                                            placeholder="Create a username" 
                                            onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                            type="email" 
                                            className="form-control" 
                                            name="email" 
                                            value={email} 
                                            placeholder="Enter email address"
                                            onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            name="password" 
                                            value={password} 
                                            placeholder="Enter password"
                                            onChange={this.handleChange} />
                                        </div>
                                        <button type="submit" className="btn btn-warning btn-block">Create Account</button>
                                    </form>
                                    <div className="clearfix"></div>
                                    <p className="content-divider center mt-4">
                                        <span>or</span>
                                    </p>
                                </div>

                                <p className="text-center" style={{color: "white"}}>
                                    Already have an account? &nbsp; &nbsp;
                                    <Link to="/login">Login Now</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-sm-12 mt-5 footer">
                        <p className="text-white small text-center">
                            &copy; 2018 Prep Shop & Save &nbsp; &nbsp; | &nbsp; &nbsp;
                            <Link to="/team"> Meet the Team </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section> 

         
            </div>
        );
    }
}
}






    


export default Register;



