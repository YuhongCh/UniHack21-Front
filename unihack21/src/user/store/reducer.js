import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
  userDetail: []
})

function userReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_INFO :
      return state.set('userDetail', fromJS(action.userDetail));

    default :
      return state;
  }
}

export default userReducer;