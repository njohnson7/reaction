import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Board from './Board';

import * as actions from '../../actions/BoardActions';

import { fetchBoard } from '../../actions/BoardActions';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    const boardId = this.props.match.params.id;    
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchBoard(boardId));
  }

  componentWillUnmount() {
    this.unsubscribe();
  } 

  board = () => {
    const store = this.context.store;
    const boardId = this.props.match.params.id;
    return store.getState().boards.find(board => board.id === +boardId);
  }

  lists = () => {
    const store = this.context.store;
    return store.getState().lists;
  }

  cards = () => {
    const store = this.context.store;
    return store.getState().cards;
  }

  onSave = (board_id) => {
    this.context.store.dispatch(actions.fetchBoard(board_id));
  }

  render() {
    return (
      <Board 
        board={this.board()}
        lists={this.lists()}
        cards={this.cards()}
        onSave={this.onSave}
      />
    )
  }
}

export default BoardContainer;
