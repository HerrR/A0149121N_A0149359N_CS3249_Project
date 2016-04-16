import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Events } from '../api/events.js';

// import Event from './Event.jsx';
import EventTable from './EventTable.jsx';
import SearchField from './SearchField.jsx';

// import AccountsUIWrapper from './AccountsUIWrapper.jsx';
export default class App extends Component {
  constructor(){
    super();
    this.updateQuery = this.updateQuery.bind(this);
    this.state = {query: ""}
    this.setState = this.setState.bind(this);
  }


  updateQuery(query){
    this.setState({query: query});
  }
  
  render() {

    // console.log("Props in App", this.props);
    // console.log("State in App", this.state);
    // console.log("This in App", this);

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
        <header>
          <h1>CS3249 Assignment03</h1>
          <div className="contributors">Rickard Bergeling, Katie Huang</div>
        </header>
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
}

export default createContainer(() => {
  Meteor.subscribe('events');

  return {
    events: Events.find({}).fetch(),
  };
}, App);
