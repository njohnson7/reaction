import React from 'react';
import PropTypes from 'prop-types';
import EditableDescription from './EditableDescription';
import * as actions from '../../actions/CardActions';

class EditableCardDescription extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static propTypes = {
    card: PropTypes.object
  };

  state = {
    description: this.props.card.description,
  };

  handleBlur = (e) => {
    if (e.target.value !== this.props.card.description) {
      this.context.store.dispatch(
        actions.updateCard(
          this.props.card.id,
          { description: e.target.value }
        )
      );
    }
  };

  handleSaveClick = (e) => {
    if (e.target.className === 'button') { e.target.blur(); }
  };

  handleChange = (e) => {
    this.setState({ description: e.target.value });
  };

  render() {
    return (
      <EditableDescription
        childClassName="textarea-toggle"
        value={this.state.description}
        onBlur={this.handleBlur}
        onSaveClick={this.handleSaveClick}
        onChange={this.handleChange}
      />
    );
  }
};

export default EditableCardDescription;
