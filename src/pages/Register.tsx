import React,{SyntheticEvent, useState} from 'react';
import {Navigate,useNavigate} from "react-router-dom";
import axios from 'axios';
import './Login_Register.css';

function Register() {

  const [name, setName]= useState('');
  const [email,setEmail] = useState(' ');
  const [password,setPassword] = useState(' ');
  let navigate = useNavigate();

  
  const handleSubmit = async (e: SyntheticEvent)=>{
    e.preventDefault();
    if (!name || !email || !password) return;
    const user = { name, email, password };
    const {data} = await axios.post('/registeruser',user);

    setName(' ');
    setEmail(' ');
    setPassword(' ');
    console.log('====================================');
    console.log(data);
    console.log('====================================');
      
    return navigate("/")
  }
  return (
<div className='App-header'>
            <form className='form' onSubmit={handleSubmit}>
                <h4>Register form</h4>
                <div className='form-row'>
                <label htmlFor='name' className='form-label'>
                    Name
                </label>
                <input
                    type='text'
                    className='form-input email-input'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
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
                <a href='/' type='button' className='btn logout-btn'>
                    Login
                </a>
            </div>
        </div>
    );
}

export default Register;
