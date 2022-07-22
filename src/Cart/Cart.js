import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Cart = ({ active,setActive }) => {
  const navigate = useNavigate();
  const onClickButtonHandler = () => {
    navigate("/information");
    setActive({...active,cardActive: true,
        informationActive: true,
        shippingActive: false,
        paymentActive: false,});
  };
  return (
    <Container style={{ minHeight: "80%" }}>
      <Row>
        <Col md={12} className="text-center bg-success">
          <h1>Cart Page</h1>
          <Button onClick={() => onClickButtonHandler()} variant="secondary">
            Information
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart