import React from 'react';

const AddList = (props) => {
  const divStyle = {
    maxHeight: '300px',
  };
  const inputStyle = {
    display: 'block',
    color: 'white',
  };

  return (
    <div id="new-list" className="new-list" >
      {props.visible
        ? <div style={divStyle}>
            <input
              type="text"
              placeholder="Add a list..."
              style={inputStyle}
              onChange={props.change}
              value={props.text}
            />
            <div style={divStyle}>
              <input
                type="submit"
                className="button"
                value="Save"
                onClick={props.save}
              />
              <i className="x-icon icon" onClick={props.click}></i>
            </div>
          </div>
        : <span onClick={props.click}>Add a list...</span>
      }
    </div>
  );
};

export default AddList;
