import React from "react";
import Avatar from "@material-ui/core/Avatar";
import logo from "../Assets/morgan__logo-dark.png";
import { routes } from "../constant/constant";
import ExpandMenu from './Accessories/ExpandMenu'
import { Link } from "react-router-dom";
import ExpandMenuHome from "./HomeDecor/ExpandMenuHome";
import ExpandCloth from "./Clothing/ExpandCloth";
import { useState } from "react";

const Drawer = ({ isOpen, toggleDrawer }) => {
  const [isMenuOpenAcc, setIsMenuOpenAcc] = useState(false);
  const [isMenuOpenHD, setIsMenuOpenAccHD] = useState(false);
  const [isMenuOpenClo, setIsMenuOpenAccClo] = useState(false);
  const toggleMenuAcc = () => {
    setIsMenuOpenAcc(!isMenuOpenAcc);
    setIsMenuOpenAccHD(false);
    setIsMenuOpenAccClo(false);
  };
  const toggleMenuHD = () => {
    setIsMenuOpenAccHD(!isMenuOpenHD);
    setIsMenuOpenAcc(false);
    setIsMenuOpenAccClo(false);
  };
  const toggleMenuClo = () => {
    setIsMenuOpenAccClo(!isMenuOpenClo);
    setIsMenuOpenAcc(false);
    isMenuOpenHD(false);
  };
  return (
    <>
      {isOpen &&
        <div onClick={toggleDrawer}
          className="back-drop w-100 h-100 position-absolute">
        </div>
      }
      {isOpen && (
        <div
          className="navbar-drawer position-absolute"
          style={{
            transform: `translate(${(props) => (props.isOpen ? "0" : "-100")})`,
          }}
        >
          <div
            className="d-flex flex-column"
            style={{
              gap: "1rem",
              padding: "1rem 1rem",
            }}
          >
            <h2>
              <Avatar
                size="sm"
                src={logo}
                width={50}
                height={50}
              />
            </h2>
            <div>
              {
                routes.map((route) => {
                  if (route.subRoutesWomenAcsies) {
                    return (
                      <ExpandMenu
                        route={route}
                        key={route.name}
                        isMenuOpenAcc={isMenuOpenAcc}
                        toggleMenuAcc={toggleMenuAcc}
                      />
                    );
                  }
                  if (route.subRoutesWomenHD) {
                    return (
                      <ExpandMenuHome
                        route={route}
                        key={route.name}
                        isMenuOpenHD={isMenuOpenHD}
                        toggleMenuHD={toggleMenuHD}
                      />
                    );
                  }
                  if (route.subRoutesWomenCloth) {
                    return (
                      <ExpandCloth
                        route={route}
                        key={route.name}
                        isMenuOpenClo={isMenuOpenClo}
                        toggleMenuClo={toggleMenuClo}
                      />
                    );
                  }
                return (
                  <Link
                    className='d-flex text-decoration-none'
                    onClick={toggleDrawer}
                    key={route.name}
                    to={route.link}
                    style={{
                      color: "white",
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
