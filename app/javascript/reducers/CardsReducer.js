export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_CARDS_SUCCESS') {
    return action.cards;
  }
}