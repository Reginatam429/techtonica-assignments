const eventKey = require('./keys').eventbrite;
const client = new eventbrite.Client(eventKey);

import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";

//Homepage
import Homepage from "./components/homepage.component";

//Event
import EventList from "./components/events-list.component";
import EditEvents from "./components/edit-events.component";
//User
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";

//Savedevents
import SavedeventsList from "./components/savedevents-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        {/*Homepage Route*/}
        <Route path="/" exact component={Homepage} />

        {/*Event Routes*/}
        <Route path="/events" component={EventList} />
        <Route path="event/edit/:id" component={EditEvents} />

        {/*User Routes*/}
        <Route path="/user/edit/:id" component={EditUser} />
        <Route path="/create/user" component={CreateUser} />

        {/*Eventsaved Routes*/}
        <Route path="/savedevents" exact component={SavedeventsList} />

      </div>
    </Router>
  );
}


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.eventbriteapi.com/v3/users/me/?token=PWPAN2BVQ6LDWMJPMJN3")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
