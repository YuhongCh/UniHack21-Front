import axios from "axios";
import * as actionTypes from "./actionTypes";

const getConversationDetail = (result) => ({
    type: actionTypes.GET_CONVERSATION_DETAIL,
    conversationDetail: result.data
  })
  
export const getConversation = (token, roomId) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/room/history',
      data: {
        cookie: token,
        roomId: 1628346176
      }
    }).then((res) => {
      dispatch(getConversationDetail(res.data));
    })
    .catch(error => error);
  }
}