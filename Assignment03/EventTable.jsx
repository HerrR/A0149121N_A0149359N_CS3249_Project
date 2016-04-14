EventTable = React.createClass({
	render(){
		console.log("Props in EventTable", this.props);
		var filterText = this.props.filterText.toLowerCase();
		var events = [];

		this.props.events.forEach(function(ev){
			if((ev.title.toLowerCase().indexOf(filterText) != -1) || (ev.organiser.toLowerCase().indexOf(filterText) != -1)){
				events.push(<Event key={ev._id} details={ev}/>);
			}
		});

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