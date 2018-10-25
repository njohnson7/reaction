import React from 'react';
import moment from 'moment';

const Card = ({ card }) => (
  <div className='card-background'>
    <div className="card ">
      <i className="edit-toggle edit-icon sm-icon"></i>

      <div className="card-info">
        {card.labels.map((label, i) => (
          <div key={i} className={`card-label ${label} colorblindable`}></div>
        ))}
        <p>{card.title}</p>
      </div>

      <h1>asdasdasjukhdiasd</h1>

      <div className="card-icons">
        <i className="clock-icon sm-icon overdue-recent completed">
          {moment(card.due_date).format('MM-DD-YYYY')}
          {moment(card.due_date).format('MM-DD-YYYY')}
        </i>
        <i className="description-icon sm-icon"></i>
        <i className="comment-icon sm-icon"></i>
      </div>
    </div>
  </div>
);

export default Card;
