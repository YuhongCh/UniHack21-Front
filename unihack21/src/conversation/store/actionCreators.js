import axios from "axios";
import * as actionTypes from "./actionTypes";

const getConversationDetail = (result) => ({
    type: actionTypes.GET_CONVERSATION_DETAIL,
    conversationDetail: result
  })
  
export const getConversation = (token) => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/conversation',
      data: {
        cookie: token
      }
    }).then((res) => {
      dispatch(getConversationDetail(res.data));
    })
    .catch(error => error);
  }
}