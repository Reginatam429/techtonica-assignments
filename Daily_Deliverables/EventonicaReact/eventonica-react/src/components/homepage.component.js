import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Eventonica!</h1>
                <br></br>
                <p>This is the place for you to play with events:</p>
                <div className="centerButtons">
                    <NavLink to="/create/user"><button type="button" size="lg">Create your user</button></NavLink><br></br>
                    <br></br>
                    <NavLink to="/events"><button type="button" size="lg">See upcoming events in San Francisco Bay Area</button></NavLink><br></br>
                    <br></br>
                    <NavLink to="/user/edit/:id"><button type="button" size="lg">Edit your user info</button></NavLink>
                </div>
                <div>
                  <Card>
        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
                </div>
            </div>
        )
    }
}