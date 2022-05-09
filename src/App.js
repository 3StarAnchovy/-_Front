import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cctv from './components/Cctv';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import Logout from './components/User/Logout';
import React, { useState } from 'react';

function App() {
  const [UserInfo, setUserInfo] = useState(false);
  console.log(UserInfo);
  return (
    <div>
    <Router>
      <Navbar UserInfo = {UserInfo} />
      <Routes>
        <Route path="/Cctv" element={<Cctv/>} />
        <Route path="/" element={<Home/>} exact={true} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login setUserInfo = {setUserInfo}/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Logout" element={<Logout/>} />
      </Routes>
    </Router>
    </div>
  );
}
// route로 감쌀 때 componet가 아니라 element
// v6 쓰면서 조금 바뀐듯 ?
export default App;
