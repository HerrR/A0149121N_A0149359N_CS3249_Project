// App component - represents the whole app
App = React.createClass({
  // mixins: [ReactMeteorData],
 
  render() {
    var randomEvents = [
      { _id: 1, title: "Something ", organiser: "NUS Students", eventDate: "First week of april" },
      { _id: 2, title: "Something else", organiser: "Rickard", eventDate: "Second week of april" },
      { _id: 3, title: "Something entirely different ", organiser: "Katie", eventDate: "Last week of april" }
    ];
    console.log("Props in App", this.props);
    return (
      <div className="container">
        <header>
          <h1>CS3249 Assignment03</h1>
        </header>
        <EventTable events={randomEvents} />
      </div>
    );
  }
});