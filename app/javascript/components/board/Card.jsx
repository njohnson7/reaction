import React from 'react';
import moment from 'moment';
  const getDueDateClass = (card) => {
    console.log(typeof card.due_date);
    // if completed
    //   green
    // else
    //   overdue: red
    //   due-soon: yellow
    //   due-later: ???
    if (card.completed) {
      return 'completed';
    } else {
      // if overdue
      if (new Date(card.due_date) < new Date()) {
        return 'overdue';
      } else {
        return 'due-soon';
      }
    }
  }

const Card = ({ card }) => {

  return <div className='card-background'>
    <div className="card ">
      <i className="edit-toggle edit-icon sm-icon"></i>
      <div className="card-info">
        {card.labels.map((label, i) => (
          <div key={i} className={`card-label ${label} colorblindable`}></div>
        ))}
        <p>{card.title}</p>
      </div>
      <div className="card-icons">
        <i className={`clock-icon sm-icon ${getDueDateClass(card)}`}>
          {moment(card.due_date).format('MMM DD')}
        </i>
        <i className="description-icon sm-icon"></i>
        <i className="comment-icon sm-icon"></i>
      </div>
    </div>
  </div>
};

export default Card;
