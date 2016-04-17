import React from 'react';
import { Link } from 'react-router';

// Single event row in the event table
export default Event = React.createClass({
	render(){

		// Event details set to details passed as property from EventTable
		var eventDetails = this.props.details;
		return (
			<tr>
				<td><Link to={"/view/"+this.props.details._id._str}><span className="glyphicon glyphicon-eye-open black"></span></Link></td>
				<td>{eventDetails.title}</td>
				<td>{eventDetails.organiser}</td>
				<td>{eventDetails.eventDate}</td>
			</tr>
		)
	}
});