import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import { Link } from 'react-router';

export default Event = React.createClass({

	render(){
		// console.log("Props in event",this.props);
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