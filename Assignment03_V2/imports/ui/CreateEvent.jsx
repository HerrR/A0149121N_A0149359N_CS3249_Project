import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';

import Header from './Header.jsx';

// Component used to create new events
export default CreateEvent = React.createClass({
  
  render() {
    return (
      <div className="container">
        <Header/>
        <Link to="/events"><button className="btn btn-primary">Back to events</button></Link>
        <p>This is where you can create an event!</p>
      </div>
    );
  }
})