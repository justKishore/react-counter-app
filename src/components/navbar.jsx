import React, { Component } from "react";

// Stateless Functional Component - it only used to render, no eventhandlers or helper methods or a state

// Can't use life cycle hooks in Stateless Functional Component, we need to use class component
// Object Destructuring
// const NavBar = (props) turns into
const NavBar = ({ totalCounters }) => {
  console.log("NavBar-Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge bage-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge bage-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
