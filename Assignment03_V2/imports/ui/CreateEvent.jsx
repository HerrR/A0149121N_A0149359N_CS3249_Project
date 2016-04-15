import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';


export default CreateEvent = React.createClass({

  
  render() {

    return (
      <div className="container">
        <header>
          <h1>CS3249 Assignment03</h1>
          <div className="contributors">Rickard Bergeling, Katie Huang</div>
        </header>
        <Link to="/"><button className="btn btn-primary">Back to events</button></Link>
        <p>This is where you can create an event!</p>
      </div>
    );
  }
})