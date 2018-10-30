import React from 'react';
import PropTypes from 'prop-types';

class AddCard extends React.Component {
  state = {
    addCardVisible: false,
    addCardText: '',
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  addCardSaveHandler = (event) => {
    event.preventDefault();
    if (!this.state.addCardText) return;

    let list_id = this.props.listId;
    let title = this.state.addCardText;
    let body = ({
      list_id,
      card: { title },
    });

    this.context.store.dispatch(
      actions.createCard(body, () => {
        this.setState({
          addCardVisible: false,
          addCardText: '',
        });
        this.props.onClose();
      })
    )
  }

  handleChange = (e) => {
    this.setState({
      addCardText: e.target.value
    });
  }

  onKeyPress = (e) => {
    if (e.key == "Enter") {
      this.addCardSaveHandler(e);
    }
  }

  render() {
    return (
      <div> 
        <div className="add-dropdown add-bottom active-card">
          <div className="card">
            <div className="card-info"></div>
            <textarea 
              name="add-card"
              autoFocus={true}
              value={this.state.addCardText}
              onChange={this.handleChange}
              onKeyPress={this.onKeyPress}
            ></textarea>
            <div className="members"></div>
          </div>
          <a 
            className="button"
            onClick={this.addCardSaveHandler}
          >Add</a>
          <i 
            className="x-icon icon"
            onClick={this.props.onClose}
          ></i>
          <div className="add-options"><span>...</span>
          </div>
        </div>
      </div>
    );
  }
}

AddCard.contextTypes = { store: PropTypes.object }

export default AddCard;