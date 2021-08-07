import axios from "axios";
import * as actionTypes from "./actionTypes";

const getUserData = (result) => ({
  type: actionTypes.GET_USER_INFO,
  userDetail: result.data
})

export const getUser = (token) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/user/get',
      data: {
        cookie: token
      }
    }).then((res) => {
      dispatch(getUserData(res.data));
    })
      .catch(error => error)};
}