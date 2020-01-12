import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Hello from "../Components/Hello";
import Counter from "../Components/Counter";
import { Navbar, Nav } from "react-bootstrap";
import material from "../Components/card";
import Test1 from "../Components/Test1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

class Navigation extends Component {
  obj = {
    image: "test image"
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Home </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/Hello">Hello</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Counter">Counter</Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
        <Switch>
          <Route path="/" exact component={Test1} />
          <Route path="/hello" component={Hello} />
          <Route path="/counter" component={Counter} />
        </Switch>
        ;
      </Router>
    );
  }
}
export default Navigation;
