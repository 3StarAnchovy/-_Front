import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';

axios.defaults.withCredentials = true;//백 & 서버 쿠키 공유 해결방법


function Login(props) {
    const [Id, setId] = useState(false);
    const [Password, setPassword] = useState(false);

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let body = {
            id: Id,
            pw: Password
        }
        fetch('http://localhost:3001/User/Login',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(body)
            }).then(res => res.json()).then(data => {
                if (data.result === 'true') {
                    console.log(data.sessionID);
                    localStorage.setItem(Id, data.sessionID);
                    props.setUserInfo(Id);
                    alert('로그인 성공!');
                }
                else if (data.result === 'checkId') {
                    alert('존재하지 않는 아이디입니다.');
                }
                else if (data.result === 'checkPw') {
                    alert('비밀번호가 일치하지 않습니다.');
                }
                else alert('로그인 실패');
            });
    }

    // const onLogout = (e) => {
    //     e.preventDefault();
    //     fetch('http://localhost:3001/User/Logout',
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": localStorage.getItem(Id)
    //             },
    //             credentials: 'include',
    //         }).then(res => res.json()).then(data => {
    //             if (data.result === 'true') {
    //                 console.log(localStorage);
    //                 localStorage.removeItem(Id);
    //                 alert('로그아웃 성공');
    //             }
    //         });
    // }

    return (
        <div>
            <Container className="panel" style={{ marginTop: '40px', marginBottom: '30px', maxWidth: '300px' }}>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col>
                            <Form.Control type="text" placeholder="UserID" onChange={onIdHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col>
                            <Form.Control type="password" placeholder="Password" onChange={onPasswordHandler} />
                        </Col>
                    </Form.Group>

                    <div className="d-grid gap-1">
                        <Button variant="primary" type="submit" size="sm" onClick={onSubmit}>
                            로그인
                        </Button>
                        {/* <Button variant="primary" type="submit" size="sm" onClick={onLogout}>
                            로그아웃
                        </Button> */}
                        <Link to='/SignUp' style={{ display: 'inline-grid', textDecoration: 'none' }}>
                            <Button variant="success" size="sm">
                                회원가입
                            </Button>
                        </Link>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Login
