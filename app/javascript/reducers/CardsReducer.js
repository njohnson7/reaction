export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    return action.board.lists.reduce((cards, list) => {
      return cards.concat(list.cards);
    }, []);

  } else if (action.type === 'CREATE_CARD_SUCCESS') {
    const newCard = action.card;
    newCard.id = Number(newCard.id);
    return state.concat(newCard);

  } else if (action.type === 'FETCH_CARD_SUCCESS') {
    return state.concat(action.card);

  } else {
    return state;
  }
}