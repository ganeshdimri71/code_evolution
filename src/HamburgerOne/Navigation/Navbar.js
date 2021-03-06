import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { FaBars, FaAdn } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../Assets/morgan__logo-dark.png";
import "../SearchButton.css";
import { iconsRoutes } from "../constant/constant";
import Accessories from "./Accessories/Accessories";
import HomeDecor from "./HomeDecor/HomeDecor";
import Clothing from "./Clothing/Clothing";

const Navbar = ({ toggleDrawer, routes, isOpen }) => {
  return (
    <Row
      className="navbar-wrapper w-100 m-0"
      style={{ backgroundColor: "black" }}
    >
      <div
        className="navbar-container 
        d-flex justify-content-between 
        align-items-center w-100
        my-0 mx-auto 
              "
        style={{
          padding: "2rem",
          height: "70px",
          maxWidth: "1300px",
          color: "white",
        }}
      >
        <div className="navbar-logo">
          <Avatar size="sm" src={logo} width={50} height={50} />
        </div>
        <div
          className="navbar-right d-flex"
          style={{
            gap: "1rem",
          }}
        >
          <form onSubmit={(event) => event.preventDefault()} role="search">
            <label htmlFor="search">Search for stuff</label>
            <input
              id="search"
              type="search"
              placeholder="Search..."
              autoFocus
              required
            />
            <button type="submit">Go</button>
          </form>
          <div
            className="navbar-component d-flex align-items-center"
            style={{
              gap: "0.5rem",
              fontSize: "1rem",
            }}
          >
            {routes.map((route) => {
              if (route.subRoutesWomenAcsies) {
                return <Accessories route={route} key={route.name} />;
              }
              if (route.subRoutesWomenHD) {
                return <HomeDecor route={route} key={route.name} />;
              }
              if (route.subRoutesWomenCloth) {
                return <Clothing route={route} key={route.name} />;
              }
              return (
                <Link
                  key={route.name}
                  to={route.link}
                  className="navbar-link
                  text-decoration-none
                  "
                  style={{
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
            className="d-flex
             align-items-center"
            style={{
              gap: "0.5rem",
              fontSize: "1rem",
            }}
          >
            {iconsRoutes.map((iconRoute) => {
              return (
                <Link
                  className="navbar-icon"
                  key={iconRoute.name}
                  to={iconRoute.link}
                >
                  <iconRoute.icon style={{ width: "25px", height: "25px" }} />
                </Link>
              );
            })}
          </div>
          <div
            className="draw-button
            align-items-center d-grid"
            onClick={() => toggleDrawer()}
            style={{
              position: "absolute",
              right: "1rem",
              fontSize: "2rem",
              marginTop: "5px",
            }}
          >
            {!isOpen ? (
              <FaBars style={{ alignSelf: "center", transition: "1s ease" }} />
            ):null}
          </div>
        </div>
      </div>
    </Row>
  );
};

export default Navbar;
