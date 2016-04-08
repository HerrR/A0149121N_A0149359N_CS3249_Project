EventTable = React.createClass({
	renderEvents(){
		var events = this.props.events.map(function(ev){
			return <Event key={ev._id} details={ev} />;
		});
		return events;
	},

	render(){
		console.log("Props in EventTable", this.props);
		return (
				<div className="eventTable">
					<div className="row mainActions">
						<div className="col-md-12">
							<span className="col-md-3">
								<button className="btn btn-success">
									<span className="glyphicon glyphicon-plus"></span>
									&nbsp;Create Event
								</button>
							</span>
							<span className="col-md-6">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Search"/>
									<span className="input-group-btn">
										<a className="btn btn-default"><span className="glyphicon glyphicon-search" style={{color: 'rgb(51,51,51)'}}></span></a>
										<a className="btn btn-default"><span className="fa fa-undo" style={{color: 'rgb(51,51,51)'}}></span></a>
									</span>
								</div>
							</span>
							<span className="col-md-3 text-right form-inline">
								<div className="navbar-btn">
									Total {this.props.events.length} items&nbsp;&nbsp;&nbsp;&nbsp;
								</div>
							</span>
						</div>
					</div>
					<table className="table table-hover table-striped">
						<tbody>
							<tr>
								<th>View</th>
								<th>Title</th>
								<th>Event Organizer</th>
								<th>Event Date</th>
							</tr>
							{this.renderEvents()}
						</tbody>
					</table>
				</div>
			)
	}
});

Event = React.createClass({
	render(){
		console.log("Props in event",this.props);
		var eventDetails = this.props.details;
		return (
			<tr>
				<td>View Icon</td>
				<td>{eventDetails.title}</td>
				<td>{eventDetails.organiser}</td>
				<td>{eventDetails.eventDate}</td>
			</tr>
		)
	}
});