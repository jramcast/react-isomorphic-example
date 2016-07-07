import React, { Component } from 'react';

const defaultStyle = {
  height: 200,
  lineHeight: '200px',
  paddingLeft: '100px',
  fontSize: '15px',
  backgroundColor: '#333333',
  color: '#fafafa'
};

export default class Footer extends Component {

  render() {
    return <footer
      className="mesh__footer"
      style={defaultStyle}>
      <center>Footer</center>
    </footer>;
  }

}
