import React, { Component, PropTypes } from 'react';

const defaultStyle = {
  display: 'table-cell',
  verticalAlign: 'middle',
  backgroundColor: '#ca2121'
};

export default class Logo extends Component {

  render() {
    return <div className="mesh__logo"
      style={defaultStyle}>
        Logo
    </div>;
  }

}

Logo.propTypes = {
  imageUrl: PropTypes.string

};
