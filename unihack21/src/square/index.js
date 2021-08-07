import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import useToken from '../gateway/token'
import * as actionCreators from './store/actionCreators';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../header';

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

const Home = (props) => {
    const {token, setToken} = useToken();
    const [mount, setMount] = useState(false);
    const [endPostid, setEndid] = useState(4);

    useEffect(() => {
        if (!mount){
            validate(token)
            .then((response) => {
                if (!response) setToken(null);
            })
            props.getSquareData(token);
            setMount(true);
        }
    }, [mount, props, setToken, token]);
    // if (token === null) return (<Redirect to="/signin"/>);

    return (
        <div>
            <Header />
            <Post postList={props.postList.toJS()} endId={endPostid} />
        </div>
    );
}

const Post = ({postList, endId}) => {

    if (postList){
        return (
            postList.map(post => (
                <div>
                    <h1>{post.postBody}</h1>
                    <h1>{post.postId}</h1>
                    <h1>{post.resonance}</h1>
                </div>
            ))
        );
    }
    return (<h1>Loading ...</h1>);

}


const mapStateToProps = (state) => {
    return {
        postList: state.getIn(['square', 'postList'])
    }
}
  
  const mapDispatch = (dispatch) => ({
    getSquareData(token) {
        const action = actionCreators.getSquare(token);
        dispatch(action);
    }
  })

export default connect(mapStateToProps, mapDispatch)(Home);