import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
  postList: []
})

function squareReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_SQUARE_POST :
      return state.set('postList', fromJS(action.postList));
    default :
      return state;
  }
}

export default  squareReducer;