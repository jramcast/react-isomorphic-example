import React, { Component } from 'react';
import Logo from './logo';

const defaultStyle = {
  height: 200,
  lineHeight: '200px',
  fontSize: '33px',
  backgroundColor: 'white'
};

export default class Header extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    console.log(this.props);
    return <header
      className="mesh__header"
      style={defaultStyle}>
        <Logo imageUrl='http://www.hotelestequendama.com/static/corporativa/images/logo.svg' />
    </header>;
  }

}
