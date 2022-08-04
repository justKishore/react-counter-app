import React, { Component } from "react";

import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
// import { Component } from 'react';

class App extends Component {
  state = {
    // the componet that owns a piece of the state, should be the one modifying it
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    // mounting phase
    super();
    console.log("APP-Constructor");
    // Constructor runs first while creating an instance
    // can be use to intitialize state or things than required first
  }

  componentDidMount() {
    // mounting phase,
    // This is called after component is renderenderd into DOM
    // Perfect place to make Ajax call and get data from server
    console.log("App-Mounted");
    // If componet is mounted means it's in the DOM
  }

  // componentDidUpdate() {
  //   console.log("Component-Updated");
  // }
  handleReset = () => {
    const counter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState(counter);
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //cloning state counters
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // fillers only give specific item
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App-Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
