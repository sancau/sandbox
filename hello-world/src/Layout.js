import React, { Component } from 'react';
import { Link } from 'react-router';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Link to="home">home</Link>
        <Link to="about">about</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
