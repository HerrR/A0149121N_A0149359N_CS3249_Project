SearchField = React.createClass({

	handleChange: function() {
    	this.props.onUserInput(
     		this.refs.searchField.value,
    	);
  	},

	render(){
		console.log("Props in SearchField", this.props);
		return (
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
							<input type="text" className="form-control" onChange={this.handleChange} value={this.props.filterText} placeholder="Search" ref="searchField"/>
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
		)
	}
});