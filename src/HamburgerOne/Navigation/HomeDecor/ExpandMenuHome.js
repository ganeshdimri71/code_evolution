import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
const ExpandMenuHome = ({ route, isMenuOpenHD, toggleMenuHD }) => {
  return (
    <div
      className="expand-menu"
      onClick={toggleMenuHD}
      style={{ color: "white" }}
    >
      <div
        className="expand-menu-button d-flex
      align-items-center justify-content-between"
        onClick={toggleMenuHD}
      >
        {route.name} {isMenuOpenHD ? <FaAngleDown /> : <FaAngleRight />}{" "}
      </div>
      {isMenuOpenHD && (
        <div
          className="expand-sub-route-container d-flex flex-row"
          style={{
            padding: "0rem 1rem",
            maxHeight: "260px",
          }}
        >
          <div className="expand-category d-flex flex-column me-3">
            {route.subRoutesWomenHD.map((subRoute) => {
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
            {route.subRoutesKidsHD.map((subRoute) => {
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

export default ExpandMenuHome;
