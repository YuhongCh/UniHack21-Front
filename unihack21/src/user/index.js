import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import useToken from '../gateway/token';
import * as actionCreators from './store/actionCreators';

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

const User = (props) => {
    const [mount, setMount] = useState(false);
    const {token, setToken} = useToken();
    useEffect(() => {
        if (!mount){
            validate(token)
            .then((response) => {
                if (!response) setToken(null);
            })
            console.log("Token is" + token);
            props.getUserData(token);
            setMount(true);
        }
    }, [mount, props, token, setToken]);

    // there is only one user data, so get the first user from json list
    return (
        <div>
            <UserDetail userDetail={props.userDetail.toJS()[0]}/>
        </div>
    );
}

const UserDetail = ({userDetail}) => {
    if (userDetail){
        return (
            <h1>{userDetail.uid}</h1>
        );
    }
    return (
        <h1>Loading...</h1>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        userDetail: state.getIn(['user', 'userDetail'])
    }
}
  
const mapDispatch = (dispatch) => ({
    getUserData(token) {
        const action = actionCreators.getUser(token);
        console.log(action);
        dispatch(action);
    }
  })

export default connect(mapStateToProps, mapDispatch)(User);