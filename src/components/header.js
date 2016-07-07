import React, { Component } from 'react';

const defaultStyle = {
  height: 200,
  lineHeight: '200px',
  paddingLeft: '100px',
  fontSize: '33px'
};

export default class Header extends Component {

  render() {
    return <header
      className="mesh__header"
      style={defaultStyle}>
        HEADER
    </header>;
  }

}
