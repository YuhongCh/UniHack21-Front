import axios from "axios";
import * as actionTypes from "./actionTypes";

const getMentorData = (result) => ({
  type: actionTypes.GET_MENTOR_INFO,
  roomDetail: result
})

export const getMentor = (token) => {

  return (dispatch) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/mentor',
      data: {
        cookie: token
      }
    }).then((res) => {
      dispatch(getMentorData(res.data));
    })
      .catch(error => error)};
}