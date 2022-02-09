import React, {useState,useEffect } from 'react';
import {useNavigate, useLocation, Navigate,}  from 'react-router-dom';
import '../App.css';
import Nav from "./Nav";
import Menu from './Menu';
import axios from 'axios';
const rootUrl = 'http://localhost:3010/';

const Wrapper =(props: any)=> {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (
      async () => {
        try {
          const {data} = await axios.get(`${rootUrl}users`,{withCredentials: true,});
        } catch (error) {
          setRedirect(true)
        }
      }
    )();
}, []);

  if(redirect){
    return <Navigate to="/login" />;
  }
    return (
      <>
        <Nav/>
          <div className="container-fluid">
            <div className="row">
                <Menu/>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                
                {props.children}
                
                </main>
            </div>
          </div>
      </>
    )
}

export default Wrapper;
