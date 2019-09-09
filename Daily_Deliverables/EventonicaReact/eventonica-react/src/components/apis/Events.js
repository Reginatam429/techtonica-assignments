import React, { Component } from 'react';
import {Consumer} from './context';
import Spinner from '../spinner';
import Event from './Event';

class Events extends Component {
    render() {
        return (
            <div>
                <h1>Find your next event in the Bay Area!</h1>
                <br></br>
                <Consumer>
                    {value => {
                        const {event_list, heading} =value
                        if(event_list === undefined || event_list.length === 0) {
                            return <Spinner />
                        } else {
                            return (
                                <React.Fragment>
                                    <h3 className="text-center mb-4">{heading}</h3>
                              <div className="row">
                                {event_list.map(item =>(
                                  <Event />
                                ))}
                              </div>
                              </React.Fragment>
                            );
                        }
                    }}
                </Consumer>
            </div>
        );
    }
}

export default Events;