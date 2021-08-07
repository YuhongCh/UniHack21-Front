import axios from "axios";
import * as actionTypes from "./actionTypes";

const getSquareData = (result) => ({
  type: actionTypes.GET_SQUARE_POST,
  postList: result.data
})

export const getSquare = (token) => {

  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/post/all',
      data: {
        cookie: token
      }
    }).then((res) => {
      dispatch(getSquareData(res.data));
    })
      .catch(error => error)};
}