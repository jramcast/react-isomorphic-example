import React, { Component } from 'react';

if (process.env.BROWSER) require('./style.less');

export default class LangSelector extends Component {

  render() {
    return(
      <div className="mesh__lang-selector">
        <div className="cs-select cs-skin-rotate">
          <span className="cs-placeholder">Choose your option</span>
          <div className="cs-options">
            <ul>
              <li data-option data-value="1" className="cs-selected"><span>Option 1</span></li>
              <li data-option data-value="2"><span>Option 2</span></li>
              <li data-option data-value="3"><span>Option 3</span></li>
            </ul>
          </div>
          <select className="cs-select cs-skin-rotate">
            <option value="" disabled selected>Choose your option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
      </div>
    );
  }

}
