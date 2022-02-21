import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <Container className="panel" style={{ marginTop: '30px', marginBottom: '30px', maxWidth: '300px' }}>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col>
                            <Form.Control type="password" placeholder="UserID" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <br />

                    <div className="d-grid gap-1">
                        <Button variant="primary" type="submit" size='sm'>
                            로그인
                        </Button>
                        <Link to='/Signup'>
                            <Button variant="success" size = 'sm'>
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
