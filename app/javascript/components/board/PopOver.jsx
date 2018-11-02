import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/CardActions';

const PopOver = (props) => {
  if (props.visible) {
    return (
      <div className={`popover ${props.type}`} style={{top: props.position.top, left: props.position.left}}>  
        {props.children}
      </div>
    );
  } else {
    return (null);
  }
}

export default PopOver;