import React,{SyntheticEvent, useState} from 'react';
import {Navigate} from "react-router-dom";
import axios from 'axios';
import './Login_Register.css';

export default function Login() {
  const [email,setEmail] = useState(' ');
  const [password,setPassword] = useState(' ');
  const [navigate, setNavigate] = useState(false);
  
  const handleLoginSubmit = async (e: SyntheticEvent)=>{
    e.preventDefault();
    if (!email || !password) return;
    const user = { email, password };
    const {data} = await axios.post('/login',user);
    
      axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
      setNavigate(true);

    setEmail(' ');
    setPassword(' ');
    console.log('====================================');
    console.log(data);
    console.log('====================================');

  }
  if (navigate) {
      return <Navigate to="/dashboard"/>;
  }
  return (
    <div className='App-header'>
    <form className='form' onSubmit={handleLoginSubmit}>
        <h4>login form</h4>
        <div className='form-row'>
        <label htmlFor='email' className='form-label'>
            Email
        </label>
        <input
            type='email'
            className='form-input email-input'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='form-row'>
        <label htmlFor='password' className='form-label'>
            Password
        </label>
        <input
            type='password'
            name='password'
            className='form-input password-input'
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type='submit' className='btn btn-block submit-btn'>
        submit
        </button>
    </form>
    <div className='container'>
        <a href='/register' type='button' className='btn logout-btn'>
            Register
        </a>
    </div>
</div>
  );
}
