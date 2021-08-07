import axios from 'axios';
import React, {useState} from 'react';
import useToken from "../token/index";
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return await axios({
    method: 'post',
    url: 'http://localhost:8080/user/signin',
    data: {
      uid: credentials.uid,
      password: credentials.password
    }
  }).then(response => response.data.code === 0 ? response.data.data.cookie : null);
}

export default function Signin(props){
  const [login, setLogin] = useState(false);
  const {setToken} = useToken();
  const [uid, setUID] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async (event) => {
    const token = await loginUser({
      uid,
      password
    });
    if (token) {
      setToken(token);
      setLogin(true);
    }
    if (login) return <Redirect to="/home"/>;
  }

  return (
    <div>
      <form className="login-form" onSubmit={handleLogin}>
        <label for="html">User ID</label>
        <input type="text" 
               value={uid} 
               name="User ID"
               label="User ID"
               onChange={e => setUID(e.target.value)} required/>
        <br/>
        <label for="html">Password</label>
        <input type="text" 
               value={password} 
               name="Password"
               label="Password"
               onChange={e => setPassword(e.target.value)} required/>
        <br/>
        <input type="submit" value="login"/>
      </form>
    </div>
  );
} 

Signin.prototype = {
  setToken: PropTypes.func.isRequired
}
