import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, browserHistory } from 'react-router';

export default SearchField = React.createClass({

	// Calls the onUserSearch function which was passed as a property from the App component
	// with the value of the search field as a parameter
	performSearch(){
		this.props.onUserSearch(this.refs.searchField.value);
	},

	// Simple check if the user hits the enter key
	handleKeypress(e){
		if(e.key === "Enter"){
			this.performSearch();
		}
	},

	// Resets the input of the search field and performs a search with the empty string, returning all events
	resetInput(){
		this.refs.searchField.value = "";
		this.performSearch();
	},

	// Logs out the user, re-routes to login page on success
	logout(){
		Meteor.logout(function(){
			browserHistory.push("/");
		});
	},

	render(){
		return (
    		<div className="row mainActions">
				<div className="col-md-12">
					<span className="col-md-3">
						<Link to="/create"><button className="btn btn-success">
							<span className="glyphicon glyphicon-plus"></span>
							&nbsp;Create Event
						</button></Link>
					</span>
					<span className="col-md-5">
						<div className="input-group">
							<input type="text" onKeyPress={this.handleKeypress} className="form-control" placeholder="Search" ref="searchField"/>
							<span className="input-group-btn">
								<a className="btn btn-default" onClick={this.performSearch}><span className="glyphicon glyphicon-search" ref="searchButton" style={{color: 'rgb(51,51,51)'}}></span></a>
								<a className="btn btn-default" onClick={this.resetInput}><span className="fa fa-undo" style={{color: 'rgb(51,51,51)'}} ref="resetButton"></span></a>
							</span>
						</div>
					</span>
					<span className="col-md-2 text-right form-inline">
						<div className="navbar-btn">
							Total {this.props.events.length} items&nbsp;&nbsp;&nbsp;&nbsp;
						</div>
					</span>
					<span className="col-md-2 text-right form-inline logout" onClick={this.logout}>
						<div className="navbar-btn">
							Logout  <i className="fa fa-sign-out biggerIcon" aria-hidden="true"></i>
						</div>
					</span>
				</div>
			</div>
		)
	}
});