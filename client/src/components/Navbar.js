import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }
Lin
  render() {
    return (
      <div>
      <nav>
    <div class="nav-wrapper">
   <Link to="/"><a  class="brand-logo center">Tasks</a></Link>   
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link to ="/create">Add Task</Link></li>
      
      </ul>
    </div>
  </nav>
      </div>
    );
  }
}

export default Navbar;

