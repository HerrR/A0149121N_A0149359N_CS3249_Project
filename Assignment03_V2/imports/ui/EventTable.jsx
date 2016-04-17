import React from 'react';

import Event from './Event.jsx';

export default EventTable = React.createClass({
	render(){

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