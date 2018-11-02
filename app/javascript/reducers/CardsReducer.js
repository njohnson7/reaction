export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    return action.board.lists.reduce((cards, list) => {
      return cards.concat(list.cards);
    }, []);

  } else if (action.type === 'CREATE_CARD_SUCCESS') {
    const newCard = action.card;
    newCard.id = Number(newCard.id);
    return state.concat(newCard);

  } else if (action.type === 'UPDATE_CARD_SUCCESS') {
    const { cardId, updatedCard } = action;

    return state.map(card => {
      if (card.id === cardId) {
        return updatedCard;
      } else {
        return card;
      }
    });

  } else if (action.type === 'FETCH_CARD_SUCCESS') {
    return state.map(card => {
      if (card.id === action.card.id) {
        return action.card;
      } else {
        return card;
      }
    });

  } else {
    return state;
  }
}