Event = React.createClass({
	render(){
		console.log("Props in event",this.props);
		var eventDetails = this.props.details;
		return (
			<tr>
				<td><span className="glyphicon glyphicon-eye-open black"></span></td>
				<td>{eventDetails.title}</td>
				<td>{eventDetails.organiser}</td>
				<td>{eventDetails.eventDate}</td>
			</tr>
		)
	}
});