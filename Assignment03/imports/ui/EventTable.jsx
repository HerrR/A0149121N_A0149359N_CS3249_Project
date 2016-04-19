import React from 'react';

import Event from './Event.jsx';

export default EventTable = React.createClass({

	sortBy(category){
		this.props.onSortTable(category);
	},

	render(){
		// Create one event element for each event in the events property
		var events = this.props.events.map((ev)=>(
			<Event key={ev._id} details={ev}/>
		));

		// Generate the orderBy arrows
		let titleArrow, organiserArrow, dateArrow;
		if(this.props.orderBy != null){

			// Check descending or ascending, determine arrow type
			let arrowType;
			if(this.props.orderBy.direction == 'desc'){
				arrowType = (<span className="glyphicon glyphicon-arrow-down green"></span>);
			} else {
				arrowType = (<span className="glyphicon glyphicon-arrow-up green"></span>);
			}


			if(this.props.orderBy.category == 'title'){
				titleArrow = arrowType;
			} else if(this.props.orderBy.category == 'organiser'){
				organiserArrow = arrowType;
			} else if(this.props.orderBy.category == 'date'){
				dateArrow = arrowType;
			}
		}

		return (
			<table className="table table-hover table-striped">
				<tbody>
					<tr>
						<th>View</th>
						<th className="pointerCursor noSelect" onClick={this.sortBy.bind(this, 'title')}>Title {titleArrow}</th>
						<th className="pointerCursor noSelect" onClick={this.sortBy.bind(this, 'organiser')}>Event Organizer {organiserArrow}</th>
						<th className="pointerCursor noSelect" onClick={this.sortBy.bind(this, 'date')}>Event Date {dateArrow}</th>
					</tr>
					{events}
				</tbody>
			</table>
		)
	}
});