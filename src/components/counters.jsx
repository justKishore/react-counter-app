import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  // moving state present here to app.js for lifiting state

  render() {
    console.log("Counters-Rendered");
    // Object Destructuring so we can avoid using this.prop.onIncrement and simply use onIncrement
    // Note same name as passed from the parent props must be used, order can be any
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id} //Ref eod
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          >
            {/* below <h1> is current counter's children */}
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

// Reason key changed to id in counter (line 23)

// key and ref aren't really 'props'. They're used internally by react and not passed to components as props.
// Consider passing it as a prop such as 'id'.
