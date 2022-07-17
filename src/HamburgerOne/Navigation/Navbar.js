import React from "react";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import logo from "../Assets/morgan__logo-dark.png";
import { routes } from "../constant/constant";
import { iconsRoutes } from "../constant/constant";

const Navbar = () => {
  return (
    <Row
      className="navbar-wrapper"
      style={{
        backgroundColor: "#6f07f6",
      }}
    >
      <div
        className="navbar-container my-0 mx-auto d-flex justify-content-space-between
              align-items-center justify-content-between
              "
      >
        <div className="navbar-logo">
          <Avatar
            size="sm"
            src={logo}
            className="logo_avatar"
            width={50}
            height={50}
          />
        </div>
        <div className="navbar-right">
          <div className="navbar-component d-flex align-items-center">
            {routes.map((route) => {
              return (
                <Link key={route.name} to={route.link} className="navbar-link">
                  {route.name}
                </Link>
              );
            })}
            {iconsRoutes.map((iconRoute) => {
              return (
                <Link
                  key={iconRoute.name}
                  to={iconRoute.link}
                  className="navbar-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-person-fill search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
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
