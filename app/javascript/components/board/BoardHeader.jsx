import React from 'react';
import PropTypes from 'prop-types';

const BoardHeader = ({ board }) => (
  <header>
    <ul>
      <li id="title">{board.title}</li>
      <li className="star-icon icon"></li>
      <li className="private private-icon icon">Private</li>
    </ul>
    <div className="menu">
      <i className="more-icon sm-icon"></i>Show Menu</div>
    <div className="subscribed">
      <i className="sub-icon sm-icon"></i>Subscribed</div>
  </header>
);

BoardHeader.contextTypes = {
  store: PropTypes.object
};

export default BoardHeader;
