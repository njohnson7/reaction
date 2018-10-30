export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    return action.board.lists.reduce((cards, list) => {
      return cards.concat(list.cards);
    }, []);
  } else if (action.type === 'CREATE_CARD_SUCCESS') {
    const newCard = action.card;
    newCard.id = Number(newCard.id);
    return state.concat(newCard);
  } else {
    return state;
  }
}