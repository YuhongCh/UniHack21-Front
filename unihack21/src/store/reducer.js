import {combineReducers} from "redux-immutable";
import {squareReducer} from "../square/store";
import {userReducer} from "../user/store";
import {roomReducer} from "../room/store";
import {conversationReducer} from '../conversation/store';

const reducer = combineReducers({
  square: squareReducer,
  user: userReducer,
  room: roomReducer,
  conversation: conversationReducer
})

export default reducer;