// App component - represents the whole app
App = React.createClass({
  // mixins: [ReactMeteorData],
 
  render() {
    var randomEvents = [
      { 
        _id: 1, 
        title: "Something ", 
        organiser: "NUS Students", 
        eventDate: "First week of april",
        tags: ["tag1", "tag2", "tag3"],
        description: "An event about something",
        venue: "Somewhere",
        price: "5$",
        agenda: "First we do something, then we do something else",
        hits: 100
      },
      { 
        _id: 2, title: "Something else", 
        organiser: "Rickard", 
        eventDate: "Second week of april",
        tags: ["tag1", "tag2", "tag3"],
        description: "An event about something else",
        venue: "Somewhere",
        price: "5$",
        agenda: "First we do something, then we do something else",
        hits: 100
      },
      { 
        _id: 3, title: "Something entirely different ", 
        organiser: "Katie", 
        eventDate: "Last week of april",
        tags: ["tag1", "tag2", "tag3"],
        description: "An event about something entirely different",
        venue: "Somewhere",
        price: "5$",
        agenda: "First we do something, then we do something else",
        hits: 100
      }
    ];
    console.log("Props in App", this.props);
    return (
      <div className="container">
        <header>
          <h1>CS3249 Assignment03</h1>
          <div className="contributors">Rickard Bergeling, Katie Huang</div>
        </header>
        <EventTable events={randomEvents} />
      </div>
    );
  }
});