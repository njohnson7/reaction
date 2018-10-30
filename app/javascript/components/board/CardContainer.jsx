import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = ({ listId }, context) => (
  <div id="cards-container" data-id="list-1-cards">
    {console.log(context.store.getState().cards, listId)}
    {context.store.getState().cards.map(card => {
      if (card.list_id === +listId) {
        return (<Card card={card} key={card.id} />);
      }
    })}
  </div>
);

CardContainer.contextTypes = { store: PropTypes.object }

export default CardContainer;
