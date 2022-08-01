import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

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
  handleIncrement = (product) => {
    // console.log("Increment clicked", this);
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  // doHandleIncrement = () => {
  // to pass argument to handleIncrement
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    return (
      // React.Fragment removes div that does nothing
      <React.Fragment>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // another way to pass argument to handleIncrement
          onClick={() => {
            return this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* conditional rendering method 2 */}
        {/* note in js ture && "hi" result in "hi",
         while false && "hi" in false */}
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary"; //dynamically rendering classes
    return classes;
  }

  formatCount() {
    // formatting count
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
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
