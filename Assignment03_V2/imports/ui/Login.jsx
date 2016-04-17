import React from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory, Link } from 'react-router';

import Header from './Header.jsx';

export default Login = React.createClass({

  // Initially no error message
  getInitialState() {
      return {
          errorMessage: ""  
      };
  },

  // Route to event page if the user is already logged in
  componentWillMount() {
    if(Meteor.user() != null){
      browserHistory.push("/events");
    };
  },


  // Login function which will:
  // - Update credentials
  // - Perform login request
  // - Re-route on success
  // - Update error message on failure
  login(){
    var credentials = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };

    Meteor.loginWithPassword(
      credentials.username, 
      credentials.password, 
      function(error){
        if(error === undefined){
          // Successful login
          browserHistory.push('/events');
        } else {
          // Login failed, update error message
          this.setState({errorMessage: error.reason});
        }
      // Bind function to 'this' to be able to access functions within the component context (this.setState)
      }.bind(this)
    );
  },

  // Listen for enter keypress to perform login by hitting the enter key
  handleKeypress(e){
    if(e.key === "Enter"){
      this.login();
    }
  },

  render() {
    return (
      <div className="container">
        <Header/>
        <div className="loginWrapper">
          <div>
            <h1 className="centered marginBottom"> Login </h1>
            <div className="login-field">
              <i id="userSymbol" className="fa fa-user"></i>
              <input type="text" className="username-field form-control" onKeyPress={this.handleKeypress} ref="username" placeholder="Username"></input>
            </div>
            <div className="login-field">
              <i id="passwordSymbol" className="fa fa-key"></i>
              <input type="password" className="password-field form-control" onKeyPress={this.handleKeypress} ref="password" placeholder="Password"></input>
            </div>
            <button className="loginAction login" onClick={this.login}>Login</button>
            <Link to="/register"><div className="loginAction toRegister">Register</div></Link>
          </div>
          {this.state.errorMessage}
        </div>
      </div>
    );
  }
});