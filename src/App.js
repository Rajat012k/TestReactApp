import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import Hello from "./Components/Hello";
import Test1 from "./Components/Test1";
import Navigation from "./Components/Navigation";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

function App() {
  return <Navigation />;
}

export default App;
