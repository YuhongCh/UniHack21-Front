import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import useToken from '../gateway/token'
import * as actionCreators from './store/actionCreators';

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
    console.log(props.roomDetail);
    // there is only one room data, so get the first room from json list
    return (
        <div>
            <RoomDetail 
                roomDetail={props.roomDetail ? props.roomDetail.toJS()[0]: undefined}
            />
        </div>
    );
}

const RoomDetail = ({roomDetail}) => {
    console.log(roomDetail);
    if (roomDetail){
        return (
            <Conversation />
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