import React from 'react';
import PropTypes from 'prop-types';

const EditableDescription = props => {
  return (
    <div>
      <textarea
        type="text"
        className={props.childClassName}
        rows="1"
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        autoFocus={true}
      />
      <div>
        <div 
          className="button" 
          value="Save"
          onClick={props.onSaveClick}
          >Save
        </div>
        <i className="x-icon icon"></i>
      </div>
    </div>
  );
};

export default EditableDescription;
