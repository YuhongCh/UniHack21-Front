import axios from 'axios';
import React, {useState} from 'react';
import useToken from "../token/index";
import {Redirect} from 'react-router-dom';

async function singupUser(credentials) {
    return await axios({
    method: 'post',
    url: 'http://localhost:8080/user/signup',
    data: {
        uid: credentials.uid,
        password: credentials.password,
        email: credentials.email,
        gender: credentials.gender,
        age: credentials.age
    }
    }).then(response => response.data.code === 0 ? response.data.data.cookie : null);
}

export default function Signup (props){
    const [uid, setUID] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState(null);
    const [age, setAge] = useState(null);
    const [login, setLogin] = useState(false);

    const handleSubmit = async (event) => {
        const token = await singupUser({
          uid,
          password,
          email,
          gender,
          age
        });
        if (token) {
          //setToken(token); // we can jump to sign in stage after sign up
          setLogin(true);
        }
        if (login) return <Redirect to="/Signin"/>;
    }

    return (
        <div>
            <form className="signup-form" onSubmit={handleSubmit}>
            <label for="html">User ID</label>
                <input type="text" value={uid} onChange={e => setUID(e.target.value)} required/> <br/>
                <label for="html">Password</label>
                <input type="text" value={password} onChange={e => setPassword(e.target.value)} required/> <br/>
                <label for="html">Email (optional)</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} /> <br/>
                <label for="html">Gender (optional)</label>
                <input type="text" value={gender} onChange={e => setGender(e.target.value)} /> <br/>
                <label for="html">Age (optional)</label>
                <input type="text" value={age} onChange={e => setAge(e.target.value)} /> <br/>
                <input type="submit" value="sign up"/>
            </form>
        </div>
    );
}
  