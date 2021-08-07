import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
  mentorDetail: []
})

function mentorReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_MENTOR_INFO :
      return state.set('mentorDetail', fromJS(action.mentorDetail));
    default :
      return state;
  }
}

export default mentorReducer;