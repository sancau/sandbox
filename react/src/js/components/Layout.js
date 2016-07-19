import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Content from './Content';

export default class Layout extends React.Component {
  render() {
    return (
      <div class="container">
        <Header />
        <Content /> 
        <Footer />
      </div>
    );
  }
}

