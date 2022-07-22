import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Payment = ({ active, setActive }) => {
  const navigate = useNavigate();
  const onClikShippingHandler = () => {
    navigate("/shipping");
    setActive({
      ...active,
      cardActive: true,
      informationActive: true,
      shippingActive: true,
      paymentActive: false,
    });
  };
  return (
    <Container>
      <Row>
        <Col
          md={12}
          className="text-center bg-success"
          style={{ minHeight: "80%" }}
        >
          <h1>Payment Page</h1>
          <Button onClick={() => onClikShippingHandler()} variant="secondary">
            Shipping
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment