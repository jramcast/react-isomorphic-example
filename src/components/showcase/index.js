import React, { Component } from 'react';

if (process.env.BROWSER) require('./style.less');

export default class Showcase extends Component {

  shouldComponentUpdate() {
    return false;
  }

  handleClick() {
    alert('Rendered component is now controlled in the browser');
  }

  render() {
    return <section className="mesh__showcase" onClick={this.handleClick}>
      <div id="large-section" className="large-section">
        <h1 className="main-title">Showcase</h1>
      </div>
    </section>;
  }

}
