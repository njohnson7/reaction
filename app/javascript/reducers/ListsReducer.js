export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    return action.board.lists.map(list => {
      const { cards, ...newListWithoutCards } = list;
      return newListWithoutCards;
    });
  } else {
    return state;
  }
}