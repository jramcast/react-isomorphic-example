import React, { Component } from 'react';

export default class Page extends Component {

  handleClick() {
    alert('You clicked!');
  }

  render() {
    return <div onClick={this.handleClick}>Hello</div>;
  }

}
