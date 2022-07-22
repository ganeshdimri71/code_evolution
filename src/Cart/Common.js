import React from 'react'
import {Row,Col,Container } from 'react-bootstrap'

const Common = ({ active }) => {
  
  return (
    <Container className="w-20">
      <Row className="bg-dark">
        <div className='d-flex flex-row justify-content-between'>
          <span
            className="d-inline-block"
            style={
              active.cardActive ? { color: "#0d6efd" } : { color: "#6c757d" }
            }
          >
            Cart
          </span>
          <span
            className="d-inline-block"
            style={
              active.informationActive
                ? { color: "#0d6efd" }
                : { color: "#6c757d" }
            }
          >
            Information
          </span>
          <span
            className="d-inline-block"
            style={
              active.shippingActive
                ? { color: "#0d6efd" }
                : { color: "#6c757d" }
            }
          >
            Shipping
          </span>
          <span
            className="d-inline-block"
            style={
              active.paymentActive ? { color: "#0d6efd" } : { color: "#6c757d" }
            }
          >
            Payment
          </span>
        </div>
      </Row>
    </Container>
  );
};

export default Common