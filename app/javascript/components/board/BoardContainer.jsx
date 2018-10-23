import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Board from './Board';

import * as actions from '../../actions/BoardActions';

import { fetchBoard } from '../actions/BoardActions';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchBoard(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  board = () => {
    const store = this.context.store;
    return store.getState().board;
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <Board />
      </div>
    )
  }
}

export default BoardContainer;
