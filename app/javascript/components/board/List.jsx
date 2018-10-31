import React from 'react';
import EditableListTitle from './EditableListTitle'
import CardContainer from './CardContainer';
import AddCard from './AddCard';

const List = ({ list, addCardActive, onAddCardClick, onClose }) => (
  <div className={`list-wrapper ${addCardActive ? 'add-dropdown-active' : ''}`}>
    <div className="list-background">
      <div className="list">
        <a className="more-icon sm-icon" href=""></a>
        <EditableListTitle list={list} />
        <div className="add-dropdown add-top">
          <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
          <div className="add-options"><span>...</span>
          </div>
        </div>
        <CardContainer listId={list.id} />
       { addCardActive ? <AddCard listId={list.id} onClose={onClose}/> : null }
        <div 
          className="add-card-toggle" 
          data-position="bottom"
          onClick={(e) => onAddCardClick(e, list.id)}
          >Add a card...
        </div>
      </div>
    </div>
  </div>
);

export default List;
