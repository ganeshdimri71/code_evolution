import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Information = ({ active, setActive }) => {
  const navigate = useNavigate();
  const onClickCardHandler = () => {
    navigate("/");
    setActive({
      ...active,
      cardActive: true,
      informationActive: false,
      shippingActive: false,
      paymentActive: false,
    });
  };
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
      <Row style={{ minHeight: "80%" }}>
        <Col
          md={12}
          className="text-center bg-success"
          style={{ minHeight: "80%" }}
        >
          <h1>Information Page</h1>
          <div className="d-flex justify-content-between">
            <Button onClick={() => onClickCardHandler()} variant="secondary">
              Cart
            </Button>
            <Button onClick={() => onClikShippingHandler()} variant="secondary">
              Shipping
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Information