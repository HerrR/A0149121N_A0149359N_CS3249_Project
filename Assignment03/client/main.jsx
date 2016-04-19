import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import MainView from '../imports/ui/MainView.jsx';
import CreateEvent from '../imports/ui/CreateEvent.jsx';
import ViewEvent from '../imports/ui/ViewEvent.jsx';
import Login from '../imports/ui/Login.jsx';
import Register from '../imports/ui/Register.jsx';
import NotFound from '../imports/ui/NotFound.jsx';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Login}/>
    	<Route path="events" component={MainView}/>
    	<Route path="create" component={CreateEvent}/>
    	<Route path="register" component={Register}/>
    	<Route path="view/:eventid" component={ViewEvent}/>
    	<Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

Meteor.startup(() => {
  	render(renderRoutes(), document.getElementById('render-target'));
});