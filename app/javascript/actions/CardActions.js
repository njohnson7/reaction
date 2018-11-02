import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}
export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card: card };
}

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card: card };
}

export function updateCardRequest() {
  return { type: types.UPDATE_CARD_REQUEST };
}

export function updateCardSuccess(cardId, updatedCard) {
  return { type: types.UPDATE_CARD_SUCCESS, cardId, updatedCard };
}

export function updateCard(cardId, data) {
  return function(dispatch) {
    dispatch(updateCardRequest());
    apiClient.updateCard(cardId, data, updatedCard => {
      dispatch(updateCardSuccess(cardId, updatedCard));
    });
  }
}

export function createCard(card, callback) {
  return function(dispatch) {
    dispatch(createCardRequest());
    apiClient.createCard(card, newCard => {
      dispatch(createCardSuccess(newCard))

      if (callback) { callback(newCard); }
    })
  }
}

export function fetchCard(cardId) {
  return function(dispatch) {
    dispatch(fetchCardRequest());
    apiClient.fetchCard(cardId, card => {
      dispatch(fetchCardSuccess(card))
    });
  }
}