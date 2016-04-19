import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';


import Header from './Header.jsx';

export default Register = React.createClass({

  // Initially no error message
  getInitialState() {
      return {
          errorMessage: "",  
      };
  },
  
  // Redirect if the user is already logged in
  componentWillMount() {
      if(Meteor.user() != null){
        browserHistory.push("/events");
      };
  },

  handleKeypress(e){
    // Enter key performs register action
    if(e.key === "Enter"){
      this.register();
    };
  },


  register(){
    // Set the options to be user input
    let options = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      profile: {
        name: this.refs.name.value
      }
    };
    console.log("Register", options);

    // Password repeat check
    if(options.password != this.refs.repeatedPassword.value){
      this.setState({errorMessage: "Passwords do not match!"});

    // Check if the user has given a profile name
    } else if(options.profile.name.length == 0){
      this.setState({errorMessage: "No name given!"});

    // If all checks out, try to create a user account. 
    // The Accounts.createUser will automatically check if there is already a user with the given name.
    } else {
      Accounts.createUser(options, function(error){

        // On error, update the error message state variable to display the error to the user
        if(error != undefined){
          this.setState({errorMessage: error.reason});

        // If there is no error, the user account has been created successfully and the user is logged in. 
        // Navigate to events page
        } else {
          browserHistory.push("/events");
        }

      }.bind(this));
    }
  },
  
  render() {
    return (
      <div className="loginWrapper">
        <h1 className="centered marginBottom"> Register </h1>
        <div className="login-field">
          <i id="userSymbol" className="fa fa-user"></i>
          <input type="text" className="username-field form-control" onKeyPress={this.handleKeypress} ref="name" placeholder="Name"></input>
        </div>
        <div className="login-field">
          <i id="userSymbol" className="fa fa-user"></i>
          <input type="text" className="username-field form-control" onKeyPress={this.handleKeypress} ref="username" placeholder="Username (used for login)"></input>
        </div>
        <div className="login-field">
          <i id="passwordSymbol" className="fa fa-key"></i>
          <input type="password" className="password-field form-control" onKeyPress={this.handleKeypress} ref="password" placeholder="Password"></input>
        </div>
        <div className="login-field">
          <i id="passwordSymbol" className="fa fa-key"></i>
          <input type="password" className="password-field form-control" onKeyPress={this.handleKeypress} ref="repeatedPassword" placeholder="Repeat password"></input>
        </div>
        <button className="loginAction register" onClick={this.register}>Register</button>
        <Link to="/"><div className="loginAction toLogin">Login</div></Link>
        <div className="errorMessage">{this.state.errorMessage}</div>
      </div>
    );
  }
});