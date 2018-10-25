export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    return action.board.lists.reduce((cards, list) => {
      return cards.concat(list.cards);
    }, []);
  } else {
    return state;
  }
}