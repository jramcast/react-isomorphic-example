import React, { Component } from 'react';
import Header from './header';
import Showcase from './showcase';
import Footer from './footer';

export default class Page extends Component {

  render() {
    return <div className="mesh__page" onClick={this.handleClick}>
      <Header />
      <Showcase />
      <Footer />
    </div>; 
  }

}
