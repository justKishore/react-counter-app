import React, { Component } from "react";

class Counter extends Component {
  // local state is removed for single source of truth
  // hence making this counter component a controlled component
  // state = {
  //   // count: 0,
  //   value: this.props.counter.value, // passing data to components counters.jsx
  //   tags: [],
  // };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  componentDidUpdate(prevProps, prevState) {
    // updating phase
    console.log("Component-Updated");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    // unmounting phase
    console.log("Counter-Unmount");
  }

  // to bind event handler to this - method 1 use constructor

  // constructor() {
  //   // used to solve scope issues of this in event handler such as handleIncrement
  //   super();
  //   console.log("Constructor", this);
  //   // this.handleIncrement.bind(this) will return a new function,
  //   // where it's this will reference to or global counter object
  //   this.handleIncrement = this.handleIncrement.bind(this); //update handleIncrement with new binded handleIncrement
  // }

  // handleIncrement() {
  //   console.log("Increment clicked", this);
  // }

  // to bind event handler to this - method 2 use arrow function

  // removed for controlled component

  // handleIncrement = () => {
  //   // console.log("Increment clicked", this);
  //   // console.log(product);
  //   // updating state of components - not directly changing state, so binding
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  // to pass argument to handleIncrement
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    console.log("Counter-Rendered");
    // console.log(this.props);
    return (
      // React.Fragment removes div that does nothing
      // <React.Fragment>

      <div>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // another way to pass argument to handleIncrement
          onClick={
            // () => {
            // return this.handleIncrement({ id: 1 });
            // or
            // this.handleIncrement
            //controlled component, check at counters.jsx
            () => {
              this.props.onIncrement(this.props.counter);
            }
            // }
          }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            // console.log("Counter " + this.props.id);
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* conditional rendering method 2 */}
        {/* note in js ture && "hi" result in "hi",
         while false && "hi" in false */}
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
      //</React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary"; //dynamically rendering classes
    return classes;
  }

  formatCount() {
    // formatting count
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // renderTags() {
  //   // conditional rendering method 1
  //   return this.state.tags.length === 0 ? (
  //     <p>There are no tags!</p>
  //   ) : (
  //     /* rendering list in react
  //       we can use map method of array */
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li> //key tag to avoid 'Each child in a list should have a unique "key" prop'.
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
