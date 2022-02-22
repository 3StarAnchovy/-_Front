import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
    const [Id, setId] = useState(false);
    const [Password, setPassword] = useState(false);
    const [Name, setName] = useState(false); // 유효성 체크
    const [Email, setEamil] = useState(false); //스테이트

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }

    const onEmailHandler = (e) => {
        setEamil(e.currentTarget.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("클릭");
        let body = {
            id: Id,
            pw: Password,
            name: Name,
            email: Email
        }
        console.log(body)
        fetch('http://localhost:3001/User/signup',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            }).then(res => {
                if (res.ok) alert("회원가입 완료");
                else alert("로그인 실패");
            })
    }

    return (
        <div>
            <Container className="panel" style={{ marginTop: '30px', marginBottom: '30px', maxWidth: '300px' }}>
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

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col>
                            <Form.Control type="password" placeholder="Password Check" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col>
                            <Form.Control type="text" placeholder="이름" onChange={onNameHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col>
                            <Form.Control type="email" placeholder="Email" onChange={onEmailHandler} />
                        </Col>
                    </Form.Group>

                    <div className="d-grid gap-1">
                        <Button variant="primary" type="submit" size="lg" onClick={onSubmit}>
                            회원가입
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Signup
