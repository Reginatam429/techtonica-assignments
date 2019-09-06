import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


export default class Homepage extends Component {
    render() {
        return (
          <body>
            <div>
                <h1>You are on the Eventonica Homepage! What would you like to do?</h1>
                <p>This is the place for you to play with events:</p>
                <ul>
                    <li><NavLink to="/create/user">Create your user</NavLink></li>
                    <li>See upcoming events in San Francisco</li>
                    <li>Edit your user info</li>
                </ul>
            </div>
          </body>
        )
    }
}