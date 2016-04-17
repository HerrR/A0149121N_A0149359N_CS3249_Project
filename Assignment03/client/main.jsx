import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import CreateEvent from '../imports/ui/CreateEvent.jsx';
import ViewEvent from '../imports/ui/ViewEvent.jsx';
import Login from '../imports/ui/Login.jsx';
import Register from '../imports/ui/Register.jsx';

// Router
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/events" component={App}/>
    <Route path="/create" component={CreateEvent}/>
    <Route path="/view/:eventid" component={ViewEvent}/>
  </Router>
);

Meteor.startup(() => {
  	render(renderRoutes(), document.getElementById('render-target'));
});