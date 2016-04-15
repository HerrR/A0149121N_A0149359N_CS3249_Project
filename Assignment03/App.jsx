// App component - represents the whole app
App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData(){
    var mjao = "ick"
    let query = {organiser:"R"+mjao+"ard"};
    return {
      events: Events.find(query).fetch()
    }
  },

  getInitialState() {
      return {
          searchText: ""
      };
  },

  handleUserInput: function(searchText){
    this.setState({
      searchText: searchText
    })
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>CS3249 Assignment03</h1>
          <div className="contributors">Rickard Bergeling, Katie Huang</div>
        </header>
        <SearchField 
          events={this.data.events}
          onUserInput={this.handleUserInput} 
        />
        <EventTable 
          events={this.data.events}
          filterText={this.state.searchText}
        />
      </div>
    );
  }
});