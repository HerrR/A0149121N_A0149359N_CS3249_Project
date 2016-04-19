import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, browserHistory } from 'react-router';
import { Events } from '../api/events.js'; 
import DateTimeField from "react-bootstrap-datetimepicker";
import { Button, ButtonToolbar, OverlayTrigger, Tooltip, Panel, PanelGroup, Table, Label } from 'react-bootstrap';
import moment from 'moment';

// Component used to create new events
export default CreateEvent = React.createClass({

	// Before the component mounts, we check if the user is logged in.
	// If not, redirect to the login page
	componentWillMount() {
	    if(Meteor.user() === null){
	    	browserHistory.push("/");
	    }  
	},

	// If the user hits the enter key while in the form, check if the input is valid
	// and if the validation goes through, create a new event
	handleKeypress(e){
		if(e.key === "Enter"){
			this.checkInput();
		};
	},

	// Initial state of the character counts
	getInitialState() {
	    return {
	    	errorMessage: null,
	        venueCharCount: 0,
			priceCharCount: 0,
			agendaCharCount: 0,
			contactCharCount: 0
	    };
	},

	// Update the character counts of the field when the user types in one of them
	updateState(){
		this.setState({
			venueCharCount: this.refs.venue.value.length,
			priceCharCount: this.refs.price.value.length,
			agendaCharCount: this.refs.agenda.value.length,
			contactCharCount: this.refs.contact.value.length
		});
	},

	// Check if the input is valid (all required fields are filled out)
	checkInput(){
		this.setState({errorMessage: null});
		// Function for controlling the validity of the dates
		// Found at: http://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
		var isDate = function(toBeTested){
			if ( Object.prototype.toString.call(toBeTested) === "[object Date]" ) {
			  if (isNaN(toBeTested.getTime())) { return false; }
			  else { return true; }
			} else { return false; }
		}

		// Get the values by the references
		let eventDetails = {
			title: this.refs.title.value,
			organiser: this.refs.organiser.value,
			tags: this.refs.tags.value,
			description: this.refs.description.value,
			dateTime: new Date(this.refs.dateTime.state.inputValue),
			displayStart: new Date(this.refs.displayStart.state.inputValue),
			displayEnd: new Date(this.refs.displayEnd.state.inputValue),
			venue: this.refs.venue.value,
			price: this.refs.price.value,
			agenda: this.refs.agenda.value,
			contact: this.refs.contact.value,
			createdBy: Meteor.user(),
			createdAt: new Date()
		};

		let errorMessage = null;

		if(eventDetails.displayEnd < eventDetails.displayStart) errorMessage = "Display Start is greater than Display End, event will never be shown. ";
		if(eventDetails.displayStart.getTime() === eventDetails.displayEnd.getTime()) errorMessage = "Display Start and Display End are the same, event will never be shown.";
		if(!isDate(eventDetails.dateTime)) errorMessage = "Invalid event date";
		if(!isDate(eventDetails.displayEnd)) errorMessage = "Invalid displayEnd date";
		if(!isDate(eventDetails.displayStart)) errorMessage = "Invalid displayStart date";
		if(eventDetails.organiser.length === 0) errorMessage = "No Organiser";
		if(eventDetails.title.length === 0) errorMessage = "No Title";

		if(errorMessage === null){
			this.newEvent(eventDetails);
		} else {
			this.setState({errorMessage: errorMessage});
		}
	},

	// Create a new event
	newEvent(eventDetails){

		// Call predefined events.insert method. Read more in the imports/api/events.js file. 
		Meteor.call('events.insert', eventDetails, function(err){
			// If the callback is undefined, is means no errors. 
			// Event was successfully created, redirect to the events page
			if(err === undefined){
				console.log("Successfully created event!");
				browserHistory.push("/events");

			// If there was an error, display it to the user. 
			} else {
				// TODO - Actual error output
				console.error(err);
			}
		});
	},

  
  	render() {
  		// Tooltip for the tags. 
  		const tagTooltip = (
  			<Tooltip id={'tagTooltip'}>
  				A tag is a <b>personal single word</b> identification that best describes the event. 
  				You can have multiple tags <u>separated with a comma</u> to best describe the event (e.g. bash,bazaar,club).
  				Tags will make it easier for students to search for the event. 
  				The maximum length for <u>each tag</u> is 25 characters.
  			</Tooltip>);

  		// Put on required fields
  		const requiredStar = (<span style={{color: 'red'}}>*</span>);

  		let date = new Date();
		date.setDate(date.getDate() + 7);
		let defaultLastDisplayDate = moment(date);

		// Adding dateTime={defaultLastDisplayDate} to a DateTimeField component 
		// will set the default value to seven days from now. It will however also 
		// cause an error for some reason. This prevents todays date from being 
		// rendered differently in the component view. 
    	return (
    	<div>
    		<div className="errorMessage top">{ this.state.errorMessage }</div>
      		<div onKeyPress={this.handleKeypress}>
  				<Panel collapsible defaultExpanded header="General">
  					<Table hover>
  						<tbody>
  							<tr>
  								<td className="col-md-3 text-right">
	  								<label>{requiredStar} Event title</label>
	  							</td>
	  							<td className="col-md-9">
	  								<input type="text" className="form-control" ref="title"></input>
	  							</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
	  								<label>{requiredStar} Organiser</label>
	  							</td>
	  							<td className="col-md-9">
	  								<input type="text" className="form-control" ref="organiser"></input>
	  							</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
	  								<label>Committee</label>
	  							</td>
	  							<td className="col-md-9">
	  								<select className="form-control" ref="committee">
										<option value="NUSSU">NUSSU</option>
                                        <option value="Faculty Clubs">Faculty Clubs</option>
                                        <option value="Halls of Residences">Halls of Residences</option>
                                        <option value="Clubs and Societies">Clubs and Societies</option>
                                        <option value="NUS">NUS</option>
                                        <option value="Interest Groups">Interest Groups</option>
                                        <option value="Others">Others</option>
	  								</select>
	  							</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
	  								<label>Category</label>
	  							</td>
	  							<td className="col-md-9">
	  								<select className="form-control" ref="category">
                                        <option value="Bashes">Bashes</option>
                                        <option value="Bazaars">Bazaars</option>
                                        <option value="Competitions/Tournament">Competitions/Tournament</option>
                                        <option value="Sports and Recreation">Sports and Recreation</option>
                                        <option value="Performances">Performances</option>
                                        <option value="Announcements">Announcements</option>
                                        <option value="Excursions">Excursions</option>
                                        <option value="Exhibitions">Exhibitions</option>
                                        <option value="Courses/Workshops">Courses/Workshops</option>
                                        <option value="Recruitment">Recruitment </option>
                                        <option value="Administration">Administration</option>
                                        <option value="Charity">Charity</option>
                                        <option value="Others">Others</option>
                                    </select>
	  							</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
  									<OverlayTrigger placement="bottom" overlay={tagTooltip}>
										<span className="glyphicon glyphicon-info-sign"></span>
									</OverlayTrigger>
	  								<label> &nbsp; Tags</label>
	  							</td>
	  							<td className="col-md-9">
	  								<input type="text" className="form-control" ref="tags"></input>
	  							</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
  									<label>Display Start</label>
  								</td>
  								<td className="col-md-5 text-right" style={{"position": "relative"}}>
  									<DateTimeField ref="displayStart"/>
  								</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
  									<label>Display End</label>
  								</td>
  								<td className="col-md-5 text-right" style={{"position": "relative"}}>
									<DateTimeField ref="displayEnd"/>
  								</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
  									<label>Description</label>
  								</td>
  								<td className="col-md-9 text-right">
									<textarea className="form-control" ref="description"></textarea>
  								</td>
  							</tr>
  						</tbody>
  					</Table>
  				</Panel>

  				<Panel collapsible defaultExpanded header="Event Details">
					<Table hover>
  						<tbody>
  							<tr>
  								<td className="col-md-3 text-right">
	  								<label>Date &amp; Time</label>
	  							</td>
	  							<td className="col-md-3" style={{"position": "relative"}}>
	  								<DateTimeField ref="dateTime"/>
	  							</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
	  								<label>Venue</label>
	  							</td>
	  							<td className="col-md-7">
	  								<input type="text" className="form-control" ref="venue" onChange={this.updateState}></input>
	  							</td>
	  							<td className="col-md-2">
	  								<span>Char. Count:</span>
	  								<input type="text" style={{"backgroundColor": "#eee"}} value={this.state.venueCharCount} readOnly className="form-control"></input>
	  							</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
	  								<label>Price</label>
	  							</td>
	  							<td className="col-md-7">
	  								<input type="text" className="form-control" ref="price" onChange={this.updateState}></input>
	  							</td>
	  							<td className="col-md-2">
	  								<span>Char. Count:</span>
	  								<input type="text" style={{"backgroundColor": "#eee"}} value={this.state.priceCharCount} readOnly className="form-control"></input>
	  							</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
	  								<label>Agenda</label>
	  							</td>
	  							<td className="col-md-7">
	  								<input type="text" className="form-control" ref="agenda" onChange={this.updateState}></input>
	  							</td>
	  							<td className="col-md-2">
	  								<span>Char. Count:</span>
	  								<input type="text" style={{"backgroundColor": "#eee"}} value={this.state.agendaCharCount} readOnly className="form-control"></input>
	  							</td>
  							</tr>
  							<tr>
  								<td className="col-md-3 text-right">
	  								<label>Contact</label>
	  							</td>
	  							<td className="col-md-7">
	  								<input type="text" className="form-control" ref="contact" onChange={this.updateState}></input>
	  							</td>
	  							<td className="col-md-2">
	  								<span>Char. Count:</span>
	  								<input type="text" style={{"backgroundColor": "#eee"}} value={this.state.contactCharCount} readOnly className="form-control"></input>
	  							</td>
  							</tr>
  						</tbody>
  					</Table>
  				</Panel>

		        <div className="row" style={{"marginBottom": "50px"}}>
		        	<div className="text-right col-md-12">
		        		<ButtonToolbar style={{"float":"right"}}>
		        			<Link to="/events">
		        				<Button>
                					<span className="glyphicon glyphicon-remove-circle"></span>
                					Cancel	
            					</Button>
            				</Link>
            				<Button bsStyle="primary" onClick={this.checkInput}>
								<span className="glyphicon glyphicon-floppy-save"></span>
                				Save
            				</Button>
            			</ButtonToolbar>
            		</div>
            	</div>
		      </div>
		    </div>
    	);
  	}
});