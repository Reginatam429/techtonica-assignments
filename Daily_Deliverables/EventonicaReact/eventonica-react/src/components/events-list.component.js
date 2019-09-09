import React, {Component} from 'react';
import Events from './apis/Events';
import { Provider } from './apis/context';




export default class EventsList extends Component {
    
   
    render() {
        return (
            <Provider>
            <React.Fragment>
                <Events/>
            </React.Fragment>
            </Provider>
        );
    }
}
