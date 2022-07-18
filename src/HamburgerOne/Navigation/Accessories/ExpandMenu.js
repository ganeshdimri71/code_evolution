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
          className="expand-sub-route-container"
          style={{
            // display: ` ${(props) => (props.isOpen ? "flex" : "none")}`,
              display: 'flex',
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          {route.subRoutesWomen.map((subRoute) => {
            return (
              <>
                {subRoute.categoryOne && (
                  <span className="accessories-heading text-primary">
                    {subRoute.categoryOne}
                  </span>
                )}
                {subRoute.name && (
                  <Link
                    key={subRoute.name}
                    to={subRoute.link}
                    className="accessories-subroute"
                  >
                    {subRoute.name}
                  </Link>
                )}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExpandMenu;

