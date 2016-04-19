import React from 'react';

export default App = React.createClass({
  render() {
    return (
      <div className="container">
        <Header/>
        {this.props.children}
      </div>
    );
  }
});