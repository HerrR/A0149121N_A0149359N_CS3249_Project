import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Events } from '../api/events.js';
import { Link, browserHistory } from 'react-router';
import { OrderFunctions } from '../api/sorting.js';

import SearchField from './SearchField.jsx';
import EventTable from './EventTable.jsx';

export default MainView = React.createClass({
  // Initially the user query will be empty
  getInitialState() {
      return {
          query: "",
          orderBy: null 
      };
  },

  componentWillMount() {
      if(Meteor.user() === null){
        browserHistory.push("/");
      }  
  },

  // Function called from the SearchField component. 
  // Will update the user query when the user hits search. 
  updateQuery(query){
    this.setState({query: query});
  },

  updateSortQuery(category){
    let order = {};

    // Default is ordering by given category in descending order
    order.category = category;
    order.direction = "desc";

    // If there has been a previous ordering function
    if(this.state.orderBy != null){
      // Check if the category and the direction was the same for the last query
      // If that is the case, switch the direction of the ordering function from descending to ascending.
      if((this.state.orderBy.category == category) && (this.state.orderBy.direction == order.direction)){
        order.direction = "asc";

      // If the category matches but not the direction, this means that the direction is ascending and the category
      // has previously been clicked -> Set sortBy to null.
      } else if((this.state.orderBy.category == category ) && (this.state.orderBy.direction != order.direction)){
        order = null;
      }
    }

    // Update the state for orderBy
    this.setState({orderBy: order});
  },
  
  render() {
    // Filter out only the events where title, organiser or any of the tags matches the user query
    let events = [];
    let userQuery = this.state.query;
    this.props.events.forEach(function(ev){
      if(
        (ev.title.toLowerCase().indexOf(userQuery.toLowerCase()) != -1) || 
        (ev.organiser.toLowerCase().indexOf(userQuery.toLowerCase()) != -1) || 
        (ev.tags.toLowerCase().indexOf(userQuery.toLowerCase()) != -1))

      {
        events.push(ev);
      };
    });

    // Sort the events, if there is a sorting query active.
    if(this.state.orderBy != null){
      events.sort(OrderFunctions[this.state.orderBy.category+"_"+this.state.orderBy.direction]);
    }

    return (
      <div>
        <SearchField 
          events={events}
          onUserSearch={this.updateQuery}
        />
        <EventTable 
          events={events}
          onSortTable={this.updateSortQuery}
          orderBy={this.state.orderBy}
        />
      </div>
    );
  }
});


export default createContainer(() => {
  // Subscribe to the events collection
  Meteor.subscribe('events');

  // Only get events with displayStart and displayEnd matching 
  let query = {
    $or : [
      {"displayStart": {"$lte": new Date()}, "displayEnd": {"$gte": new Date()}},
      {"createdBy": Meteor.user()}
    ]
    };

  return {
    // Fetch all events and store it in the events property of App.
    events: Events.find(query).fetch(),
  };
}, MainView);