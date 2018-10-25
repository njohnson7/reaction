import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = (_, context) => (
  <div id="cards-container" data-id="list-1-cards">
    {context.store.getState().cards.map(card => (
      <Card 
        card={card}
        key={card.id}
      />
    ))}
    <div className="card-background">
      <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
        <div className="cover-image"></div>
        <div className="card-info">
          <p>Another list with stuff</p>
        </div>
        <div className="card-icons"><i className="clock-icon sm-icon overdue ">Aug 3</i><i className="description-icon sm-icon"></i>
        </div>
      </div>
    </div>
    <div className="card-background">
      <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
        <div className="cover-image"></div>
        <div className="card-info">
          <p>Use the + in the top menu to make your first board now.</p>
        </div>
        <div className="card-icons"></div>
      </div>
    </div>
  </div>
);

CardContainer.contextTypes = { store: PropTypes.object }

export default CardContainer;
