import React from 'react';
import { Link } from 'react-router';

// Single event row in the event table
export default Event = React.createClass({
	incrementHits(){
		Meteor.call('events.incrementHitCount', this.props.details._id._str, function(err){
			if(err){
				console.error(err);
			};
		});
	},

	removeEvent(){
		console.log("Remove event!", this.props.details._id._str);
		Meteor.call('events.remove', this.props.details._id._str, function(err){
			if(err){
				console.error(err);
			};
		})
	},

	render(){
		
		// Event details set to details passed as property from EventTable
		let eventDetails = this.props.details;
		let evDate = eventDetails.eventDate.toDateString() + " " + (eventDetails.eventDate.getHours() < 10 ? '0' :'') + eventDetails.eventDate.getHours() + ":" + (eventDetails.eventDate.getMinutes() < 10 ? '0' :'') + eventDetails.eventDate.getMinutes();

		let currentUser = Meteor.user();
		let ownedByUser = (eventDetails.createdBy._id == currentUser._id);

		let remove;
		if(ownedByUser){
			remove = (<span className="removeIcon"><i onClick={this.removeEvent} className="fa fa-remove pull-right pointerCursor"></i></span>);
		}
		// console.log(ownedByUser);
		return (
			<tr>
				<td><Link to={"/view/"+this.props.details._id._str}><span className="glyphicon glyphicon-eye-open black" onClick={this.incrementHits}></span></Link></td>
				<td>{eventDetails.title}</td>
				<td>{eventDetails.organiser}</td>
				<td>{evDate}{remove}</td>
			</tr>
		)
	}
});