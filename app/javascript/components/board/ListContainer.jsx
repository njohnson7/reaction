import React, { Component } from 'react';
import List from './List';
import AddList from './AddList';

// import * as actions from '../../actions/BoardActions';
// import { fetchBoard } from '../../actions/BoardActions';

class ListContainer extends React.Component {
  state = {
    addListVisible: false,
    addListText: '',
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
    let body = JSON.stringify({
      board_id,
      list: { title },
    });

    fetch('/api/lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then(resp => console.log(resp))
      // Render new list onto page
      // .then(_ => this.context.store.dispatch(actions.fetchBoard(boardId)))

    console.log(this.state.addListText);
    this.setState({ 
      addListVisible: false,
      addListText: '',
    });
  }

  render() {
    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {this.props.lists.map(list => (
            <List key={list.id} list={list} />
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
