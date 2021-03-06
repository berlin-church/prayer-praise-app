import { Record } from 'immutable';

import { SharedMessagesType } from '../constants/types';
import {
  EXPAND_MESSAGE,
  FETCH_SHARED_MESSAGES_FAILED,
  FETCH_SHARED_MESSAGES_INFLIGHT,
  FETCH_SHARED_MESSAGES_SUCCESS
} from '../containers/Root/constants';

const init: SharedMessagesType = {
  displayMessage: undefined,
  error: undefined,
  expandedMessage: undefined,
  loading: false,
  messages: []
};

const Rec = Record(init);
export const initialState = new Rec();

export function sharedMessagesReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_SHARED_MESSAGES_INFLIGHT:
      return state
        .set('loading', true);

    case FETCH_SHARED_MESSAGES_SUCCESS:
      return state
        .set('loading', false)
        .set('messages', action.payload)
        .set('displayMessage', undefined);

    case FETCH_SHARED_MESSAGES_FAILED:
      return state
        .set('loading', false)
        .set('error', FETCH_SHARED_MESSAGES_FAILED)
        .set('displayMessage', 'Please refresh / try again later.');

    case EXPAND_MESSAGE:
      return state
        .set('expandedMessage', state.get('expandedMessage') === action.payload ? undefined : action.payload);

    default:
      return state;
  }
}
