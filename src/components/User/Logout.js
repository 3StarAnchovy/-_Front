import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import Home from "../Home";

axios.defaults.withCredentials = true;//백 & 서버 쿠키 공유 해결방법


const Logoout = (props) => {
    useEffect(() => {
        fetch('http://localhost:3001/User/Logout',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem(props.UserInfo)
                },
                credentials: 'include',
            }).then(res => res.json()).then(data => {
                if (data.result === 'true') {
                    console.log(localStorage);
                    localStorage.removeItem(props.UserInfo);
                    props.setUserInfo(false);
                    console.log(props);
                    alert('로그아웃 성공');
                }
            });
        console.log("this");
    }, []);
    return (
        <Link to = "/"></Link>
    );
}
export default Logoout;
