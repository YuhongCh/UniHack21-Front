import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import useToken from '../gateway/token';
import * as actionCreators from './store/actionCreators';
import {ChatWrapper} from "../style";
import {Box} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

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
            props.getConversationDetail(token, props.props);
            console.log(props.props)
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

    return (
        conversationList.map(message => {
            // only those deleted is false can render
            if (message.deleted == 0){
                return (
                    <ChatWrapper>
                        <Box className={"border"}>
                            <Avatar alt="H" src="J"> {message.senderid}</Avatar>
                        <h3>{message.message}</h3>
                        </Box>
                    </ChatWrapper>
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
    getConversationDetail(token, roomId) {
        const action = actionCreators.getConversation(token, roomId);
        dispatch(action);
    }
})

export default connect(mapStateToProps, conversationDispath)(Conversation);