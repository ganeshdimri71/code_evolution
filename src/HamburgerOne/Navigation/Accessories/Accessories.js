import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useState } from "react";
const Accessories = ({ route }) => {
  const [hover, setHover] = useState(false);
  const showSubMenu = () => {
    setHover(true);
  };
  const hideSubMenu = () => {
    setHover(false);
  };

  return (
    <div
      className="accessories-menu"
      style={{
        position: "relative",
        display: "inline-block",
      }}
      onMouseEnter={showSubMenu}
      onMouseLeave={hideSubMenu}
    >
      <div className="accessories">{route.name}</div>
      {hover && (
        <div
          className="accessories-subroutes"
          style={{ opacity: 1, cursor: "pointer" }}
        >
          {route.subRoutesWomen.map((subRoute, i) => {
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
          {/* {route.subRoutesKids.map((subRoute) => {
          return (
            <>
              {subRoute.categoryTwo && (
                <span className="accessories-subroute">
                  {subRoute.categoryTwo}
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
        })} */}
        </div>
      )}
    </div>
  );
};

export default Accessories;
const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1.3rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  border-radius: 2rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;
const MenuButton = styled.div`
  padding: 0.5rem 0.5rem;
  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  &:hover {
    transition: 0.3s ease-in;
    color: #6f07f6;
    background-color: #d0a7fc;
  }
`;
