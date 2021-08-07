import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import useToken from '../gateway/token'
import * as actionCreators from './store/actionCreators';
import Header from '../header';

import Conversation from '../conversation';

async function validate(token) {

    return await axios({
        method: 'post',
        url: 'http://localhost:8080/user/validate',
        data: {
        cookie : token
        }
    }).then(response => response.data.code === 0)
        .catch(error => null)
}

const Room = (props) => {
    const [mount, setMount] = useState(false);
    const {token, setToken} = useToken();

    useEffect(() => {
        if (!mount){
            validate(token)
            .then((response) => {
                if (!response) setToken(null);
            })
            props.getRoomData(token);
            setMount(true);
        }
    }, [mount, props, token, setToken]);

    // there is only one room data, so get the first room from json list

    return (
      <div>
      <Header/>
        <div>
            <RoomDetail 
                roomDetail={props.roomDetail ? props.roomDetail.toJS(): undefined}
            />
        </div>
      </div>
    );
}

const RoomDetail = ({roomDetail}) => {

    if (roomDetail){
        return (
            <Conversation props={roomDetail.roomid}/>
        );
    }
    return (<h1>Loading ...</h1>);
}

const mapStateToProps = (state) => {
    return {
        roomDetail: state.getIn(['room', 'roomDetail'])
    }
}
  
const roomDispatch = (dispatch) => ({
    getRoomData(token) {
        const action = actionCreators.getRoom(token);
        dispatch(action);
    }
})

export default connect(mapStateToProps, roomDispatch)(Room);