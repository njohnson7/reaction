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

  state = {
    isFetching: false,
  }

  componentDidMount() {
    const store = this.context.store;
    const boardId = this.props.match.params.id;   
    this.unsubscribe = store.subscribe(() => this.forceUpdate());

    const isCardShowing = this.props.match.url.split('/')[1] === 'cards';

    if (isCardShowing) {
      store.subscribe(this.fetchBoard);
    } else {
      store.dispatch(actions.fetchBoard(boardId));      
    }
  }

  fetchBoard = () => {
    const id = Number(this.props.match.params.id);
    const store = this.context.store;
    const card = store.getState().cards.find(card => card.id === id);

    if (card && !this.state.isFetching) {
      this.setState({ isFetching: true });
      store.dispatch(actions.fetchBoard(card.board_id));
    }
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
