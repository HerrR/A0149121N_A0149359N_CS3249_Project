import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import { Link } from 'react-router';


export default SearchField = React.createClass({

	performSearch(){
		this.props.onUserSearch(this.refs.searchField.value);
	},

	handleKeypress(e){
		if(e.key === "Enter"){
			this.performSearch();
		}
	},

	resetInput(){
		this.refs.searchField.value = "";
		this.performSearch();
	},

	render(){

		console.log("Props in SearchField", this.props);
		return (
    		<div className="row mainActions">
				<div className="col-md-12">
					<span className="col-md-3">
						<Link to="/create"><button className="btn btn-success">
							<span className="glyphicon glyphicon-plus"></span>
							&nbsp;Create Event
						</button></Link>
					</span>
					<span className="col-md-6">
						<div className="input-group">
							<input type="text" onKeyPress={this.handleKeypress} className="form-control" placeholder="Search" ref="searchField"/>
							<span className="input-group-btn" onClick={this.resetInput}>
								<a className="btn btn-default" onClick={this.performSearch}><span className="glyphicon glyphicon-search" ref="searchButton" style={{color: 'rgb(51,51,51)'}}></span></a>
								<a className="btn btn-default"><span className="fa fa-undo" style={{color: 'rgb(51,51,51)'}} ref="resetButton"></span></a>
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
		)
	}
});