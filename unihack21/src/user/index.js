import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import useToken from '../gateway/token';
import * as actionCreators from './store/actionCreators';
import Header from "../header";
import SimpleCard from "./SimpleCard";

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
            props.getUserData(token);
            setMount(true);
        }
    }, [mount, props, token, setToken]);

    // there is only one user data, so get the first user from json list

    return (
        <div>
            <Header/>
            <UserDetail userDetail={props.userDetail.toJS()}/>
        </div>
    );
}

const UserDetail = ({userDetail}) => {
    if (userDetail){
        return (
          <SimpleCard info={userDetail}/>
        );
    }
    return (
        <h1>Loading...</h1>
    )
}

const mapStateToProps = (state) => {
    return {
        userDetail: state.getIn(['user', 'userDetail'])
    }
}
  
const mapDispatch = (dispatch) => ({
    getUserData(token) {
        const action = actionCreators.getUser(token);
        dispatch(action);
    }
  })

export default connect(mapStateToProps, mapDispatch)(User);