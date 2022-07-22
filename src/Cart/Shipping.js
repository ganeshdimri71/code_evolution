import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Shipping = ({active,setActive}) => {
  const navigate = useNavigate();
   const onClickPymentHandler = () => {
     navigate("/payment");
     setActive({
       ...active,
       cardActive: true,
       informationActive: true,
       shippingActive: true,
       paymentActive: true,
     });
   };
   const onClikInformationHandler = () => {
     navigate("/information");
     setActive({
       ...active,
       cardActive: true,
       informationActive: true,
       shippingActive: false,
       paymentActive: false,
     });
   };
  return (
    <Container style={{ minHeight: "80%" }}>
      <Row>
        <Col md={12} className="text-center bg-success">
          <h1>Shipping Page</h1>
          <div className="d-flex justify-content-between">
            <Button
              onClick={() => onClikInformationHandler()}
              variant="secondary"
            >
              Information
            </Button>
            <Button onClick={() => onClickPymentHandler()} variant="secondary">
              Payment
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Shipping