import React from "react";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import logo from "../Assets/morgan__logo-dark.png";
import { routes } from "../constant/constant";
import { iconsRoutes } from "../constant/constant";
import { FaBars } from "react-icons/fa";
import Accessories from "./Accessories/Accessories";

const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <Row
      className="navbar-wrapper"
      style={{
        backgroundColor: "#6f07f6",
        width: "100%",
        margin: "0",
      }}
    >
      <div
        className="navbar-container 
              "
        style={{
          padding: "2rem",
          height: "70px",
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <button
          className="draw-button"
          onClick={() => toggleDrawer()}
          style={{
            all: "unset",
            fontSize: "2rem",
            display: "grid",
          }}
        >
          <FaBars />
        </button>
        <div className="navbar-logo">
          <Avatar
            size="sm"
            src={logo}
            className="logo_avatar"
            width={50}
            height={50}
          />
        </div>
        <div
          className="navbar-right"
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <div
            className="navbar-component"
            style={{
              display: "flex",
              gap: "0.5rem",
              fontSize: "1rem",
              alignItems: "center",
            }}
          >
            {routes.map((route) => {
              if (route.subRoutesWomen) {
                return <Accessories route={route} key={route.name} />;
              }
              return (
                <Link
                  key={route.name}
                  to={route.link}
                  className="navbar-link-one"
                  style={{
                    textDecoration: "none",
                    padding: "0.5rem 0.5rem",
                    transition: "0.5s ease",
                  }}
                >
                  {route.name}
                </Link>
              );
            })}
          </div>
          <div
            className="navbar-component-icon "
            style={{
              display: "flex",
              gap: "0.5rem",
              fontSize: "1rem",
              alignItems: "center",
            }}
          >
            {iconsRoutes.map((iconRoute) => {
              return (
                <Link
                  className="navbar-icon"
                  key={iconRoute.name}
                  to={iconRoute.link}
                  // className="navbar-icon"
                >
                  <iconRoute.icon style={{ width: "20px", height: "20px" }} />
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-person-fill search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg> */}
                  {/* <iconRoute.icon /> */}
                  {/* hello */}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Row>
  );
};

export default Navbar;
