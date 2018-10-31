import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = ({ listId }, context) => (
  <div id="cards-container" data-id="list-1-cards">
    {context.store.getState().cards.map((card, idx) => {
      if (card.list_id === +listId) {
        return (<Card card={card} key={idx} />);
      }
    })}
  </div>
);

CardContainer.contextTypes = { store: PropTypes.object }

export default CardContainer;
