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
            display: ` ${(props) => (props.isOpen ? "flex" : "none")}`,
              display: 'flex',
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          {route.subRoutesWomen.map((subRoute) => {
            return (
              <>
                {subRoute.categoryOne && (
                  <span className="expand-heading text-primary">
                    {subRoute.categoryOne}
                  </span>
                )}
                <Link
                  className="expand-menu-link"
                  to='/hello'
                  key={subRoute.name}
                >
                  {subRoute.name}
                </Link>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExpandMenu;
const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
`;
const SMenu = styled.div``;
const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* font-size: 2.5rem; */
  padding: 0.5rem;
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  /* font-size: 2rem; */
`;
