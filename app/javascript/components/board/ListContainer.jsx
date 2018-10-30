import React, { Component } from 'react';
import List from './List';
import AddList from './AddList';
import PropTypes from 'prop-types'

import * as actions from '../../actions/ListActions';

class ListContainer extends React.Component {
  state = {
    addListVisible: false,
    addListText: '',
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  addListClickHandler = () => {
    this.setState({ addListVisible: !this.state.addListVisible });
  }

  addListChangeHandler = (event) => {
    this.setState({ addListText: event.target.value });
  }

  addListSaveHandler = (event) => {
    console.log(event, this);
    event.preventDefault();
    if (!this.state.addListText) return;

    let board_id = location.pathname.match(/boards\/(\d+)/)[1];
    let title = this.state.addListText;
    let body = ({
      board_id,
      list: { title },
    });

    this.context.store.dispatch(
      actions.createList(body, () => {
        this.setState({
          addListVisible: false,
          addListText: '',
        });
        this.props.onSave(body.board_id);
      })
    )
  }

  render() {
    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {this.props.lists.map(list => (
            <List 
              key={list.id} 
              list={list} 
            />
          ))}
        </div>
        <AddList
          visible={this.state.addListVisible}
          click={this.addListClickHandler}
          change={this.addListChangeHandler}
          text={this.state.addListText}
          save={this.addListSaveHandler}
        />
      </div>
    );
  }
}

export default ListContainer;
