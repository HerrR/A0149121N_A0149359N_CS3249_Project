import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import CreateEvent from '../imports/ui/CreateEvent.jsx';
import ViewEvent from '../imports/ui/ViewEvent.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/create" component={CreateEvent}/>
    <Route path="/view/:eventid" component={ViewEvent}/>
  </Router>
);

Meteor.startup(() => {
  	render(renderRoutes(), document.getElementById('render-target'));
});