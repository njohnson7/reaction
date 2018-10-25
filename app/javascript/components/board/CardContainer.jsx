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
  </div>
);

CardContainer.contextTypes = { store: PropTypes.object }

export default CardContainer;
