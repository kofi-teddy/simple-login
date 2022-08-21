import React from 'react'
// import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences'
import Login from './components/Login/Login'
import useToken from "./components/useToken";


function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');

//   const userToken = JSON.parse(tokenString);
//   return userToken && userToken.token
// }

function App() {

  // const [token, setToken] = useState();
  // const token = getToken();
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/dashbaord" element={<Dashboard />} />
                <Route path="/preferences" element={<Preferences />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
