import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [farmId, setfarmId] = useState(false);
    const onfarmIdHandler = (e) => {
        setfarmId(e.currentTarget.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let body = {
            farmId: farmId
        }
        console.log(body)
        fetch('http://localhost:3001/User/SignUp',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            }).then(res => res.json()).then(data => {
                if (data.result === 'true')
                    alert("회원가입 완료");
                else alert("회원가입 실패");
            })
    }
    return (
        <div>
            <Container className="panel" style={{ marginTop: '30px', marginBottom: '30px', maxWidth: '300px' }}>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Col>
                            <Form.Control type="text" placeholder="FarmID" onChange={onfarmIdHandler} />
                            {<div className="invalid-input">당신만의 농장이름을 지어보세요.</div>}
                        </Col>
                    </Form.Group>
                </Form>
                <div className="d-grid gap-1">
                    <Button variant="primary" type="submit" size="sm" onClick={onSubmit}>
                        농장등록
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Register;