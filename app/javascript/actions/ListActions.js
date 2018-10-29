import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}
export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function createList(body, callback) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(body, newList => {
      dispatch(createListSuccess(newList))
      if (callback) {
        callback(newList);
      }
    })
  }
}
