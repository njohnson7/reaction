import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/CardActions';
import EditableCardTitle from './EditableCardTitle';
import EditableCardDescription from './EditableCardDescription';
import PopOver from './PopOver';
import DatePicker from './DatePicker';

class EditCardForm extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  state = {
    position: {
      top: 133,
      left: 100
    },
    visible: {
      dueDate: false,
      label: false
    },
    type: null
  };

  onClick = (e) => {
    console.log(e.target.dataset);
    let visibleField = e.target.dataset.visible;
    let stateVisible = this.state.visible;
    this.setState({
      visible: Object.assign(stateVisible, { [visibleField]: true })
    });
  }

  componentDidMount() {
    const store = this.context.store;
    const cardId = this.props.match.params.id;

    store.dispatch(actions.fetchCard(cardId));
  }

  render() {
    const store = this.context.store;
    const cardId = this.props.match.params.id;
    const card = store.getState().cards.find(card => card.id == +cardId);

    if (card === undefined) return null;

    return (
      <div id="modal-container">
        <div className="screen"></div>
        <div id="modal">
          <Link to={`/boards/${card.board_id}`}>
            <i className="x-icon icon close-modal">
            </i>
          </Link>
          <header>
            <i className="card-icon icon .close-modal"></i>
            <EditableCardTitle card={card} />
            <p>in list <a className="link">Stuff to try (this is a list)</a><i className="sub-icon sm-icon"></i>
            </p>
          </header>
          <section className="modal-main">
            <ul className="modal-outer-list">
              <li className="details-section">
                <ul className="modal-details-list">
                  <li className="labels-section">
                    <h3>Labels</h3>
                    { 
                      card.labels.map((color, idx) => (
                      <div key={idx} className="member-container">
                        <div className={`${color} label colorblindable`}></div>
                      </div>
                      ))
                    }
                    <div className="member-container"><i className="plus-icon sm-icon"></i>
                    </div>
                  </li>
                  <li className="due-date-section">
                    <h3>Due Date</h3>
                    <div id="dueDateDisplay" className="overdue completed">
                      <input id="dueDateCheckbox" type="checkbox" className="checkbox" checked="" />Aug 4 at 10:42 AM <span>(past due)</span>
                    </div>
                  </li>
                </ul>
                <form className="description">
                  <p>Description</p>
                  <EditableCardDescription card={card} />
                </form>
              </li>
              <li className="comment-section">
                <h2 className="comment-icon icon">Add Comment</h2>
                <div>
                  <div className="member-container">
                    <div className="card-member">TP</div>
                  </div>
                  <div className="comment">
                    <label>
                      <textarea required="" rows="1" placeholder="Write a comment..."></textarea>
                      <div>
                        <a className="light-button card-icon sm-icon"></a>
                        <a className="light-button smiley-icon sm-icon"></a>
                        <a className="light-button email-icon sm-icon"></a>
                        <a className="light-button attachment-icon sm-icon"></a>
                      </div>
                      <div>
                        <input type="submit" className="button not-implemented" value="Save" />
                      </div>
                    </label>
                  </div>
                </div>
              </li>
              <li className="activity-section">
                <h2 className="activity-icon icon">Activity</h2>
                <ul className="horiz-list">
                  <li className="not-implemented">Show Details</li>
                </ul>
                <ul className="modal-activity-list">
                  <li>
                    <div className="member-container">
                      <div className="card-member">TP</div>
                    </div>
                    <h3>Taylor Peat</h3>
                    <div className="comment static-comment"><span>The activities are not functional.</span>
                    </div>
                    <small>22 minutes ago - <span className="link">Edit</span> - <span className="link">Delete</span></small>
                    <div className="comment">
                      <label>
                        <textarea required="" rows="1" placeholder="The activities have not been implemented yet."></textarea>
                        <div>
                          <a className="light-button card-icon sm-icon"></a>
                          <a className="light-button smiley-icon sm-icon"></a>
                          <a className="light-button email-icon sm-icon"></a>
                        </div>
                        <div>
                          <p>You haven't typed anything!</p>
                          <input type="submit" className="button not-implemented" value="Save" /><i className="x-icon icon"></i>
                        </div>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="member-container">
                      <div className="card-member small-size">VR</div>
                    </div>
                    <p><span className="member-name">Victor Reyes</span> changed the background of this board <small>yesterday at 4:53 PM</small>
                    </p>
                  </li>
                  <li className="activity-comment">
                    <div className="member-container">
                      <div className="card-member">VR</div>
                    </div>
                    <h3>Victor Reyes</h3>
                    <div className="comment static-comment"><span>Example of a comment.</span>
                    </div>
                    <small>22 minutes ago - <span className="link">Edit</span> - <span className="link">Delete</span></small>
                    <div className="comment">
                      <label>
                        <textarea required="" rows="1" placeholder="Example of a comment."></textarea>
                        <div>
                          <a className="light-button card-icon sm-icon"></a>
                          <a className="light-button smiley-icon sm-icon"></a>
                          <a className="light-button email-icon sm-icon"></a>
                        </div>
                        <div>
                          <p>You haven't typed anything!</p>
                          <input type="submit" className="button not-implemented" value="Save" />
                          <i className="x-icon icon"></i>
                        </div>
                      </label>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <aside className="modal-buttons">
            <h2>Add</h2>
            <ul>
              <li className="member-button"><i className="person-icon sm-icon"></i>Members</li>
              <li className="label-button"><i className="label-icon sm-icon"></i>Labels</li>
              <li className="checklist-button"><i className="checklist-icon sm-icon"></i>Checklist</li>
              <li 
                className="date-button not-implemented"
                data-visible="dueDate"
                onClick={this.onClick}
              >
                <i className="clock-icon sm-icon"></i>
                <PopOver
                  visible={this.state.visible.dueDate}
                  position={this.state.position}
                  type={'due-date'}
                >
                  <DatePicker />
                </PopOver>
                Due Date
              </li>
              <li className="attachment-button not-implemented"><i className="attachment-icon sm-icon"></i>Attachment</li>
            </ul>
            <h2>Actions</h2>
            <ul>
              <li className="move-button"><i className="forward-icon sm-icon"></i>Move</li>
              <li className="copy-button"><i className="card-icon sm-icon"></i>Copy</li>
              <li className="subscribe-button"><i className="sub-icon sm-icon"></i>Subscribe<i className="check-icon sm-icon"></i>
              </li>           
              <li className="archive-button"><i className="file-icon sm-icon "></i>Archive</li>
            </ul>
            <ul className="light-list">
              <li className="not-implemented">Share and more...</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default EditCardForm;