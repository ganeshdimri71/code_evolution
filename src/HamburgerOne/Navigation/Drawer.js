import React from "react";
import { routes } from "../constant/constant";
import { iconsRoutes } from "../constant/constant";
import Avatar from "@material-ui/core/Avatar";
import logo from "../Assets/morgan__logo-dark.png";
import { Link } from "react-router-dom";

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      {isOpen && <div onClick={toggleDrawer} className="back-drop"></div>}
      {isOpen && (
        <div
          className="navbar-drawer"
          style={{
            zIndex: "150",
            position: "absolute",
            top: "0",
            height: "100vh",
            width: "40%",
            background: "white",
            transition: "0.3s ease",
            transform: `translate(${(props) => (props.isOpen ? "0" : "-100")})`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              padding: "2rem 2rem",
            }}
          >
            <h2 style={{ fontSize: "3rem" }}>
              <Avatar
                size="sm"
                src={logo}
                className="logo_avatar"
                width={50}
                height={50}
              />
            </h2>
            <div onClick={toggleDrawer}>
              {routes.map((route) => {
                return (
                  <Link
                    key={route.name}
                    to={route.link}
                    style={{
                      display: "flex",
                      textDecoration: "none",
                      color: "black",
                      fontSize: "2.5rem",
                      padding: "0.5rem",
                    }}
                  >
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
      )}
    </>
  );
};

export default Drawer;
