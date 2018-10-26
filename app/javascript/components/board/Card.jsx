import React from 'react';
import moment from 'moment';

const getDueDateClass = (card) => {
  if (card.completed) {
    return 'completed';
  } else {
    if (new Date(card.due_date) < new Date()) {  // overdue
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
        {card.due_date
          ? <i className={`clock-icon sm-icon ${getDueDateClass(card)}`}>
              {moment(card.due_date).format('MMM DD')}
            </i>
          : null
        }
        {card.description
          ? <i className="description-icon sm-icon"></i>
          : null
        }
        <i className="comment-icon sm-icon"></i>
      </div>
    </div>
  </div>
};

export default Card;
