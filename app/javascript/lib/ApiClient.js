import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.headers.common['Content-Type'] = 'application/json';

const apiClient = {
  getBoards: function(callback) {
    return axios.get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios.post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoard: function(boardId, callback) {
    return axios.get(routes.BOARD_SHOW_URL(boardId))
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateList: function(listId, updatedList, callback) {
    return axios.put(routes.UPDATE_LIST_URL(listId), { title: updatedList.title })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList: function(body, callback) {
    return axios.post(routes.CREATE_LIST_URL, body)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;
