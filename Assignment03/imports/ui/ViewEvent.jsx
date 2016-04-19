import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Events } from '../api/events.js';
import { Link, browserHistory } from 'react-router';

import EventDetails from './EventDetails.jsx';

export default ViewEvent = React.createClass({
  componentWillMount() {
      if(Meteor.user() === null){
        browserHistory.push("/");
      }  
  },
  getEvent(){
    // The ID for the event we want to know more about is given by the route parameter 'eventid'
    let eventID = this.props.routeParams.eventid;
    let allEvents = this.props.events;
    let chosenEvent;

    // Find the event with the ID matching the route eventid route parameter
    allEvents.forEach(function(ev){
      if(ev._id._str === eventID){
        chosenEvent = <EventDetails details={ev}/>;
      };
    });

    if(chosenEvent === undefined){
      return "Unable to find event with id "+eventID;
    } else {
      return chosenEvent;
    }
  },

  render() {
    return (
      <div>
        <div>
          {this.getEvent()}
        </div>
        <div className="pull-right">
          <Link to="/events">
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
