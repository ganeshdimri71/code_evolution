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
            // zIndex: "150",
            // position: "absolute",
            // top: "0",
            // height: "100vh",
            // width: "40%",
            // background: "white",
            // transition: "1s ease !important",
            transform: `translate(${(props) => (props.isOpen ? "0" : "-100")})`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem 1rem",
            }}
          >
            <h2>
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
                      fontSize: "1rem",
                      padding: "0.5rem",
                    }}
                  >
                    {route.name}
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
