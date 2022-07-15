import React from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './App24.css'

const App24 = () => {
    return (
        <Row>
            <Col md={3}></Col>
            <Col md={6}>
                <Container>
                    <Row className="border border-secondary">
                        <Form.Group className="inputBox" controlId="formBasicEmail">
                            <Form.Label>CARD NUMBER</Form.Label>
                            <Form.Control className="card-number-input" type="text" maxLength={16} placeholder="Card Number" />
                        </Form.Group>
                        <Form.Group className="inputBox" controlId="formBasicEmail">
                            <Form.Label>CARD HOLDER</Form.Label>
                            <Form.Control className="card-number-input" type="text" maxLength={16} placeholder="Crad Holder Name" />
                        </Form.Group>
                        <div className="flexbox">
                            <div className="inputBox">
                                <span>expiration mm</span>
                                <Form.Select className="month-input" aria-label="Default select example">
                                    <option value="month" selected disabled>month</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </Form.Select>
                            </div>
                            <div className="inputBox">
                                <span>expiration yy</span>
                                <Form.Select className="year-input" aria-label="Default select example">
                                    <option value="year" selected disabled>year</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                </Form.Select>
                            </div>
                            <Form.Group className="inputBox" controlId="formBasicEmail">
                                <Form.Label>cvv</Form.Label>
                                <Form.Control className="cvv-input" type="text" />
                            </Form.Group>
                        </div>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Row>
                </Container>
            </Col>
            <Col md={3}></Col>
        </Row>
    )
}

export default App24