import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">EventonicaReact</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/create/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/events" className="nav-link">Find Events</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Saved Events List</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}