import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, browserHistory, Link } from 'react-router';
import { Events } from '../api/events.js';

import EventDetails from './EventDetails.jsx';


export default ViewEvent = React.createClass({
  getEvent(){
    var eventID = this.props.routeParams.eventid;
    var allEvents = this.props.events;
    var chosenEvent;
    allEvents.forEach(function(ev){
      if(ev._id._str === eventID){
        chosenEvent = <EventDetails details={ev}/>;
      };
    });
    console.log(chosenEvent);
    return chosenEvent;
  },

  render() {
    // var chosenEvent = this.getEvent();
    return (
      <div className="container">
        <header>
          <h1>CS3249 Assignment03</h1>
          <div className="contributors">Rickard Bergeling, Katie Huang</div>
        </header>
        <div>
          {this.getEvent()}
        </div>
        <div className="pull-right">
          <Link to="/">
            <button type="button" className="btn btn-primary">
              <span class="glyphicon glyphicon-remove"></span>CLOSE
            </button>
          </Link>
        </div>
      </div>

    );
  }
});

export default createContainer(() => {
  Meteor.subscribe('events');

  return {
    events: Events.find({}).fetch(),
  };
}, ViewEvent);
