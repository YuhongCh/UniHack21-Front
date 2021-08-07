import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import useToken from '../gateway/token'
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

const Mentor = (props) => {
    const [mount, setMount] = useState(false);
    const {token, setToken} = useToken();

    useEffect(() => {
        if (!mount){
            validate(token)
            .then((response) => {
                if (!response) setToken(null);
            })
            props.getMentorData(token);
            setMount(true);
        }
    }, [mount, props, token, setToken]);
    console.log(props.mentorDetail);
    // there is only one room data, so get the first room from json list
    return (
        <div>
            
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        mentorDetail: state.getIn(['mentor', 'mentorDetail'])
    }
}
  
  const mapDispatch = (dispatch) => ({
    getMentorData(token) {
        const action = actionCreators.getMentor(token);
        dispatch(action);
    }
  })

export default connect(mapStateToProps, mapDispatch)(Mentor);