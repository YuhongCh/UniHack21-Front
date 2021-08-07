import axios from "axios";
import * as actionTypes from "./actionTypes";

// used to get room information
const getRoomData = (result) => ({
  type: actionTypes.GET_ROOM_INFO,
  roomDetail: result.data
})

export const getRoom = (token) => {

  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/room/get',
      data: {
        cookie: token
      }
    }).then((res) => {
      dispatch(getRoomData(res.data));
    })
      .catch(error => error)};
}
