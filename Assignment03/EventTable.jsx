EventTable = React.createClass({
	renderEvents(){
		var events = this.props.events.map(function(ev){
			return <Event key={ev.id} details={ev} />;
		});
		return events;
	},

	render(){
		console.log("Props in EventTable", this.props);
		return (
				<div className="eventTable">
				<h2>This is the event table, stuff should be rendered below!</h2>
					{this.renderEvents()}
				</div>
			)
	}
});

Event = React.createClass({
	render(){
		console.log("Props in event",this.props);
		return (
			<div className="event">
				<h3>This is an event </h3>
				<div>Organiser: {this.props.details.organiser}</div>
				<div>Title: {this.props.details.title}</div>
				<div>Date: {this.props.details.eventDate}</div>
			</div>
		)
	}
});