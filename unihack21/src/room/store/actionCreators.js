import axios from "axios";
import * as actionTypes from "./actionTypes";

// used to get room information
const getRoomData = (result) => ({
  type: actionTypes.GET_ROOM_INFO,
  roomDetail: result
})

export const getRoom = (token) => {

  return (dispatch) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/room',
      data: {
        cookie: token
      }
    }).then((res) => {
      dispatch(getRoomData(res.data));
    })
      .catch(error => error)};
}
