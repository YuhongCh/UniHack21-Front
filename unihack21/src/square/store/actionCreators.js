import axios from "axios";
import * as actionTypes from "./actionTypes";

const getSquareData = (result) => ({
  type: actionTypes.GET_SQUARE_POST,
  postList: result
})

export const getSquare = (token) => {

  return (dispatch) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/posts',
      data: {
        cookie: token
      }
    }).then((res) => {
      dispatch(getSquareData(res.data));
    })
      .catch(error => error)};
}