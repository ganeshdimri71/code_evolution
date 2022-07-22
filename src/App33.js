import React from "react";
import Common from "./Cart/Common";
import { Container, Row, Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./Cart/ProfileButton.css";
import Cart from "./Cart/Cart";
import Information from "./Cart/Information";
import Shipping from "./Cart/Shipping";
import Payment from "./Cart/Payment";
import { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const App33 = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState({
    cardActive: true,
    informationActive: false,
    shippingActive: false,
    paymentActivae: false,
  });
  return (
    <Container>
      <Row className="mb-5">
        <Common active={active} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Cart active={active} setActive={setActive} />}
          />
          <Route
            exact
            path="/information"
            element={<Information active={active} setActive={setActive} />}
          />
          <Route
            exact
            path="/shipping"
            element={<Shipping active={active} setActive={setActive} />}
          />
          <Route
            exact
            path="/payment"
            element={<Payment active={active} setActive={setActive} />}
          />
        </Routes>
      </Row>

      <Row>
        <div className="d-flex flex-row profile-button">
          <div style={{ width: "30%" }} className="me-2 profile-submenu-button">
            <Button
              onClick={() => {
                setToggle(!toggle);
                document
                  .getElementById("profile-toggle-button-fade-one")
                  .classList.toggle("fade");
                document
                  .getElementById("profile-toggle-button-fade-two")
                  .classList.toggle("fade");
                document
                  .getElementById("profile-toggle-button-fade-three")
                  .classList.toggle("fade");
                document
                  .getElementById("profile-toggle-button-fade-four")
                  .classList.toggle("fade");
                document
                  .getElementById("profile-toggle-button-fade-five")
                  .classList.toggle("fade");
              }}
              variant="outline-secondary"
              className="me-2 mb-2 align-self-start position-relative"
              style={{ width: "100%" }}
            >
              Profile
              {!toggle ? (
                <svg
                  style={{ right: "0rem" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-chevron-right  position-absolute my-1 mx-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ right: "0rem" }}
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down position-absolute my-1 mx-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </Button>
            <Button
              variant="outline-secondary me-2 mb-2"
              className="mb-2"
              style={{ width: "100%" }}
            >
              Option 1
            </Button>
            <Button
              variant="outline-secondary me-2 mb-2"
              className="mb-2"
              style={{ width: "100%" }}
            >
              Option 1
            </Button>
            <Button
              variant="outline-secondary me-2 mb-2"
              className="mb-2"
              style={{ width: "100%" }}
            >
              Option 1
            </Button>
            <Button
              variant="outline-secondary me-2 mb-2"
              className="mb-2"
              style={{ width: "100%" }}
            >
              Option 1
            </Button>
          </div>

          <div
            style={{ width: "30%" }}
            className="profile-toggle-button"
            id="profile-toggle-button-fade"
          >
            <Button
              variant="outline-secondary"
              className="mb-2"
              id="profile-toggle-button-fade-one"
              style={{ width: "100%" }}
            >
              Option 1
            </Button>
            <Button
              variant="outline-secondary"
              id="profile-toggle-button-fade-two"
              className="mb-2"
              style={{ width: "100%" }}
            >
              Option 1
            </Button>
            <Button
              variant="outline-secondary"
              id="profile-toggle-button-fade-three"
              className="mb-2"
              style={{ width: "100%" }}
            >
              Option 2
            </Button>
            <Button
              variant="outline-secondary"
              id="profile-toggle-button-fade-four"
              className="mb-2"
              style={{ width: "100%" }}
            >
              Option 3
            </Button>
            <Button
              variant="outline-secondary"
              id="profile-toggle-button-fade-five"
              className="mb-2"
              style={{ width: "100%" }}
            >
              Option 4
            </Button>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default App33;
