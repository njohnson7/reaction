import React from 'react';
import List from './List'

const ListContainer = ({ lists }) => (
  <div id="list-container" className="list-container">
    <div id="existing-lists" className="existing-lists">
    </div>
    <div id="new-list" className="new-list">
      <span>Add a list...</span>
      <input type="text" placeholder="Add a list..." />
      <div>
        <input type="submit" className="button" value="Save" /><i className="x-icon icon"></i>
      </div>
    </div>
  </div>
);

export default ListContainer;