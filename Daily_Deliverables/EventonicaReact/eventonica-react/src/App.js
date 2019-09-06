import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
//Event
import EventList from "./components/events-list.component"
import EditEvents from "./components/edit-events.component"
//User
import EditUser from "./components/edit-user.component"
import CreateUser from "./components/create-user.component"

//Savedevents
import SavedeventsList from "./components/savedevents-list.component"

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      //Event Routes
      <Route path="/event" component={EventList} />
      <Route path="event/edit/:id" component={EditEvents} />

      //User Routes
      <Route path="/user/edit/:id" component={EditUser} />
      <Route path="/create" component={CreateUser} />

      //Eventsaved Routes
      <Route path="/" exact component={SavedeventsList} />

    </Router>
  );
}

export default App;
