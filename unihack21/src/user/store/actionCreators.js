import axios from "axios";
import * as actionTypes from "./actionTypes";

const getUserData = (result) => ({
  type: actionTypes.GET_USER_INFO,
  userDetail: result
})

export const getUser = (token) => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/user',
      data: {
        cookie: token
      }
    }).then((res) => {
      dispatch(getUserData(res.data));
    })
      .catch(error => error)};
}