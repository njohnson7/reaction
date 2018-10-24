export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_LISTS_SUCCESS') {
    return action.lists.map(list => {
      const { cards, ...newListWithoutCards } = list;
      return newListWithoutCards;
    });
  }
}