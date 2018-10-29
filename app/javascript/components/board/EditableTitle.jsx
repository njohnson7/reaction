import React from 'react';
import PropTypes from 'prop-types';

const EditableTitle = props => {
  if (props.showInput) {
    return (
      <div>
        <input
          type="text"
          className={props.childClassName}
          value={props.title}
          onBlur={props.onBlur}
          onKeyPress={props.onKeyPress}
          onChange={props.onChange}
          autoFocus={true}
        />
      </div>
    );
  } else {
    return (
      <div>
        <p
          className={props.childClassName}
          onClick={props.onTitleClick}
        >{props.title}</p>
      </div>
    );
  }
};

export default EditableTitle;
