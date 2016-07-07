import React, { Component } from 'react';

export default class Header extends Component {

  handleClick() {
    alert('Rendered component is now controlled in the browser');
  }

  render() {
    return <header className="mesh__header" onClick={this.handleClick}>
      HEADER
    </header>;
  }

}
