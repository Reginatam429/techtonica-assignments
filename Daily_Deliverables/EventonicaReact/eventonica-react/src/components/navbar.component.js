import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (

      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <NavLink to="/" className="navbar-brand">EventonicaReact</NavLink>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">

          <li className="navbar-item">
          <NavLink to="/create/user" className="nav-link" activeClassName="nav-link-active" >Create User</NavLink>
          </li>
          <li className="navbar-item">
          <NavLink to="/events" className="nav-link" activeClassName="nav-link-active">Find Events</NavLink>
          </li>
          <li className="navbar-item">
          <NavLink to="/savedevents" className="nav-link" activeClassName="nav-link-active">Saved Events List</NavLink>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}