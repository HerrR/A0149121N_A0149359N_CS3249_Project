import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import Event from './Event.jsx';

export default EventTable = React.createClass({


	render(){
		console.log("Props in EventTable", this.props);

		var events = this.props.events.map((ev)=>(
			<Event key={ev._id} details={ev}/>
		));

		return (
			<table className="table table-hover table-striped">
				<tbody>
					<tr>
						<th>View</th>
						<th>Title</th>
						<th>Event Organizer</th>
						<th>Event Date</th>
					</tr>
					{events}
				</tbody>
			</table>
		)
	}
});