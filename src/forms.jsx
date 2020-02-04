import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class forms extends Component {
  namee;
  pwd;
  state = {
    name: this.namee,
    password: this.pwd
  };
  inputvalue(e) {
    e.preventDefault();

    console.log(this.state.name);
    console.log(this.state.password);
  }
  ab = event => {
    this.state.name = event.target.value;
  };
  abc = event => {
    this.state.password = event.taget.value;
  };
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={this.state.name}
            onChange={event => this.ab(event)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={this.state.password}
            onChange={event => this.abc(event)}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          onClick={this.inputvalue.bind(this)}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default forms;
