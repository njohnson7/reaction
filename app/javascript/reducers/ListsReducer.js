export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    return action.board.lists.map(list => {
      const { cards, ...newListWithoutCards } = list;
      return newListWithoutCards;
    });
  } else if (action.type === 'UPDATE_LIST_SUCCESS') { 
    const { listId, updatedList } = action;

    return state.map(list => {
      if (list.id === listId) {
        return updatedList;
      } else {
        return list;
      }
    });
  } else {
    return state;
  }
}

