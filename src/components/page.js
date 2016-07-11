import React, { Component } from 'react';
import Header from './header';
import Showcase from './showcase';
import Footer from './footer';

const defaultStyle = {
  fontFamily: 'Montserrat, sans-serif'
};

export default class Page extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log('did mount');
  }

  render() {
    console.log(this.props);
    return <div
      className="mesh__page"
      onClick={this.handleClick}
      style={Object.assign({}, defaultStyle, this.props.style)}>
        <Header settings={this.props.header}/>
        <Showcase/>
        <Footer />
    </div>;
  }

}
