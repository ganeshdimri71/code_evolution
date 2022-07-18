import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
const ExpandMenu = ({ route }) => {
  console.log("route", route);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="expand-menu" onClick={toggleMenu}>
      <div className="expand-menu-button" onClick={toggleMenu}>
        {route.name} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}{" "}
      </div>
      {isMenuOpen && (
        <div
          className="expand-sub-route-container d-flex flex-row"
          style={{
            // display: ` ${(props) => (props.isOpen ? "flex" : "none")}`,
            display: "flex",
            flexDirection: "column",
            padding: "0rem 1rem",
          }}
        >
          <div className="expand-category d-flex flex-column me-3">
            {route.subRoutesWomen.map((subRoute) => {
              return (
                <>
                  {subRoute.categoryOne && (
                    <span className="expand-heading">
                      {subRoute.categoryOne}
                    </span>
                  )}
                  {subRoute.name && (
                    <Link
                      key={subRoute.name}
                      to={subRoute.link}
                      className="expand-menu-link"
                    >
                      {subRoute.name}
                    </Link>
                  )}
                </>
              );
            })}
          </div>
          <div className="expand-category d-flex flex-column">
            {route.subRoutesKids.map((subRoute) => {
              return (
                <>
                  {subRoute.categoryTwo && (
                    <span className="expand-heading">
                      {subRoute.categoryTwo}
                    </span>
                  )}
                  {subRoute.name && (
                    <Link
                      key={subRoute.name}
                      to={subRoute.link}
                      className="expand-menu-link"
                    >
                      {subRoute.name}
                    </Link>
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandMenu;

