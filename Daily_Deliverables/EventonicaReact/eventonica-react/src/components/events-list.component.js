import React, {Component} from 'react';


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
            <br></br>
            <div className="form-group">
                    <input type="submit" value="Search Events" className="btn btn-primary" />
            </div>
        </div>
        </div>
        )
    }
}
