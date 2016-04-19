import React from 'react';
import { Link } from 'react-router';
// Simple header component
export default NotFound = React.createClass({
	render(){
		return (
			<div className="notFound">
				<h1>404 Page Not Found </h1>
				<Link to="/"> Take me back to the page </Link>
			</div>
		)
	}
});