import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import Hello from './Hello';

class Counter extends Component {
    obj={
        image:"test image"
    }
    render() { 
        return (
      <div>
        <h1>hey i m Counter comp</h1>
        <Hello />
    </div>
            )
    }

}
export default Counter;