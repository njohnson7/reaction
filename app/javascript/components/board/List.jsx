import React from 'react';
import CardContainer from './CardContainer'

const List = ({ list }) => (
  <div className="list-wrapper">
    <div className="list-background">
      <div className="list">
        <a className="more-icon sm-icon" href=""></a>
        <div>
          <p className="list-title">{list.title}</p>
        </div>
        <div className="add-dropdown add-top">
          <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
          <div className="add-options"><span>...</span>
          </div>
        </div>
      {
        console.log(list)
// {
//   "id": 1,
//   "title": "list1",
//   "board_id": 1,
//   "created_at": "2018-10-25T16:03:44.776Z",
//   "updated_at": "2018-10-25T16:03:44.776Z"
// }
      }
        <CardContainer />
        <div className="add-dropdown add-bottom">
          <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
          <a className="button">Add</a><i className="x-icon icon"></i>
          <div className="add-options"><span>...</span>
          </div>
        </div>
        <div className="add-card-toggle" data-position="bottom">Add a card...</div>
      </div>
    </div>
  </div>
);

export default List;
