import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Events } from '../api/events.js';

import Header from './Header.jsx';
import SearchField from './SearchField.jsx';
import EventTable from './EventTable.jsx';

export default App = React.createClass({
  // Initially the user query will be empty
  getInitialState() {
      return {
          query: ""  
      };
  },

  // Function called from the SearchField component. 
  // Will update the user query when the user hits search. 
  updateQuery(query){
    this.setState({query: query});
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

    return (
      <div className="container">
        <Header/>
        <SearchField 
          events={events}
          onUserSearch={this.updateQuery}
        />
        <EventTable 
          events={events}
        />
      </div>
    );
  }
});


export default createContainer(() => {
  // Subscribe to the events collection
  Meteor.subscribe('events');

  return {
    // Fetch all events and store it in the events property of App.
    events: Events.find({}).fetch(),
  };
}, App);