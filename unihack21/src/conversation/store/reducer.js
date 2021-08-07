import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
  conversationDetail: []
})

function conversationReducer(state = defaultState, action) {
  console.log(action.type);
  console.log(action.conversationDetail);
  switch (action.type) {
    case actionTypes.GET_CONVERSATION_DETAIL:
      return state.set('conversationDetail', fromJS(action.conversationDetail));
    default :
      return state;
  }
}

export default conversationReducer;