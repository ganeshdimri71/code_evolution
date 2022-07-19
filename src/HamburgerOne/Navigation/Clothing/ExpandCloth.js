import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
const ExpandCloth = ({ route, isMenuOpenClo, toggleMenuClo }) => {
  return (
    <div
      className="expand-menu"
      onClick={toggleMenuClo}
      style={{ color: "white" }}
    >
      <div
        className="expand-menu-button d-flex
      align-items-center justify-content-between"
        onClick={toggleMenuClo}
      >
        {route.name} {isMenuOpenClo ? <FaAngleDown /> : <FaAngleRight />}{" "}
      </div>
      {isMenuOpenClo && (
        <div
          className="expand-sub-route-container d-flex flex-row"
          style={{
            padding: "0rem 1rem",
            maxHeight: "260px",
          }}
        >
          <div className="expand-category d-flex flex-column me-3">
            {route.subRoutesWomenCloth.map((subRoute) => {
              return (
                <>
                  {subRoute.categoryOne && (
                    <span className="route-heading text-decoration">
                      {subRoute.categoryOne}
                    </span>
                  )}
                  {subRoute.name && (
                    <Link
                      key={subRoute.name}
                      to={subRoute.link}
                      className="expand-menu-link text-decoration-none"
                    >
                      {subRoute.name}
                    </Link>
                  )}
                </>
              );
            })}
          </div>
          <div className="expand-category d-flex flex-column">
            {route.subRoutesKidsCloth.map((subRoute) => {
              return (
                <>
                  {subRoute.categoryTwo && (
                    <span className="route-heading ">
                      {subRoute.categoryTwo}
                    </span>
                  )}
                  {subRoute.name && (
                    <Link
                      key={subRoute.name}
                      to={subRoute.link}
                      className="expand-menu-link text-decoration-none"
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

export default ExpandCloth;
