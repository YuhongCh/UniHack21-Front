import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
  roomDetail: []
})

function roomReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_ROOM_INFO :
      return state.set('roomDetail', fromJS(action.roomDetail));
    default :
      return state;
  }
}

export default roomReducer;