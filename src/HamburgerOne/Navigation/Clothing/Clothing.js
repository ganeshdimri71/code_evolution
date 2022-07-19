import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Clothing = ({ route }) => {
  const [hover, setHover] = useState(false);
  const showSubMenu = () => {
    setHover(true);
  };
  const hideSubMenu = () => {
    setHover(false);
  };

  return (
    <>
      {hover && (
        <div
          className="back-drop w-100 h-100 position-absolute"
          style={{ zIndex: "0" }}
        ></div>
      )}
      <div
        className="position-relative d-inline-block"
        onMouseEnter={showSubMenu}
        onMouseLeave={hideSubMenu}
      >
        <div className="accessories">{route.name}</div>
        {hover && (
          <div
            className="accessories-subroutes d-flex flex-row"
            style={{ opacity: 1, cursor: "pointer", zIndex: 999 }}
          >
            <div className="parent-category me-4">
              {route.subRoutesWomenCloth.map((subRoute, i) => {
                return (
                  <div className="acessories-category py-2">
                    {subRoute.categoryOne && (
                      <span className="route-heading  d-inline-block text-decoration-none">
                        {subRoute.categoryOne}
                      </span>
                    )}
                    {subRoute.name && (
                      <Link
                        key={subRoute.name}
                        to={subRoute.link}
                        className="accessories-subroute text-decoration-none"
                      >
                        {subRoute.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="parent-category">
              {route.subRoutesKidsCloth.map((subRoute, i) => {
                return (
                  <div className="acessories-category py-2">
                    {subRoute.categoryTwo && (
                      <span className="route-heading text-decoration-none">
                        {subRoute.categoryTwo}
                      </span>
                    )}
                    {subRoute.name && (
                      <Link
                        key={subRoute.name}
                        to={subRoute.link}
                        className="accessories-subroute text-decoration-none"
                      >
                        {subRoute.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Clothing;
