import React, {Component} from 'react';
// const ticketmaster = require('eventful-node');
// const client = new ticketmaster.Client(tmKey);
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";


export default class EventsList extends Component {
    
    state = {
        term: 'Default text'
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div>
                <h1>Find your next event in the Bay Area!</h1>
           
            <div className='search-bar ui segment'>
            <form onSubmit={this.handleSubmit} className='ui form'>
                <div className='field'>
                    <label htmlFor="event-search">Event Category:</label>
                    <input onChange={this.handleChange} name='event-search' type="text" value={this.state.term}/>
                </div>
            </form>
        </div>
        </div>
        )
    }
}
