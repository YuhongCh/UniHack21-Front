import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import useToken from '../gateway/token';
import * as actionCreators from './store/actionCreators';

import store from '../store';

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

const Conversation = (props) => {
    const [mount, setMount] = useState(false);
    const {token, setToken} = useToken();

    useEffect(() => {
        if (!mount){
            validate(token)
            .then((response) => {
                if (!response) setToken(null);
            })
            props.getConversationDetail(token);
            setMount(true);
        }
    }, [mount, props, token, setToken]);
    
    // console.log(store.getState().toJS().user.); 尝试链接user reducer

    return (
        <div>
            <Content conversationList={props.conversationDetail.toJS()}/>
        </div>
    );
}

const Content = ({conversationList}) => {
    console.log(conversationList);

    // sort the conversation by time
    conversationList.sort(function(messageA, messageB){
        return new Date(messageA.ctime) - new Date(messageB.ctime);
    });

    return (
        conversationList.map(message => {
            // only those deleted is false can render
            if (message.deleted == 0){
                return (
                    <div>
                        <h4>{message.ctime}, {message.senderid}</h4>
                        <h3>{message.message}</h3>
                    </div>
                )
            }
        })
    );
}


const mapStateToProps = (state) => {
    return {
        conversationDetail: state.getIn(['conversation', 'conversationDetail'])
    }
}


const conversationDispath = (dispatch) => ({
    getConversationDetail(token) {
        const action = actionCreators.getConversation(token);
        dispatch(action);
    }
})

export default connect(mapStateToProps, conversationDispath)(Conversation);