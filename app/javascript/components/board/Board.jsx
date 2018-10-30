import React from 'react';
import PropTypes from 'prop-types';
import BoardHeader from './BoardHeader'
import ListContainer from './ListContainer'

const Board = ({ board, lists, cards, onSave }) => (
  <div>
    <BoardHeader board={board} />
    <main>
      <ListContainer
        lists={lists} 
        onSave={onSave}
      />
    </main>
  </div>
);

Board.contextTypes = {
  store: PropTypes.object
};

export default Board;
