import React, { Component } from 'react';

// import "./home.css";


class Home extends Component {
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAuth(this.state);
    }
handleChange(e){
e.preventDefault();
this.setState({[e.target.name]: e.target.value});
}
    getValues = () => {

    };

    render() {
        const {email, username, password} = this.state;
        const {signIn} = this.props;
        if(signIn){
        return (
            <div>
                   <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-8 mx-auto">
                        <div className="card border-none">
                            <div className="card-body">
                                <div className="mt-2 text-center">
                                    <h2>Create Your Account</h2>
                                </div>
                                <p className="mt-4 text-white lead text-center">
                                    Sign up to get started with Prep Shop & Save!
                                </p>
                                <div className="mt-4">
                                    <form onSubmit ={this.handleSubmit}>
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

                                <p className="text-center">
                                    Already have an account?
                                    <a href="index.html">Login Now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-sm-12 mt-5 footer">
                        <p className="text-white small text-center">
                            &copy; 2018 Prep Shop & Save &nbsp &nbsp | &nbsp &nbsp
                            <a href="team.html"> Meet the Team </a>
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






    


export default Home;