import React from "react";
import Avatar from "@material-ui/core/Avatar";
import logo from "../Assets/morgan__logo-dark.png";
import { routes } from "../constant/constant";
import ExpandMenu from './Accessories/ExpandMenu'
import { Link } from "react-router-dom";

const Drawer = ({ isOpen, toggleDrawer }) => {
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
                  if (route.subRoutesWomen) {
                    return <ExpandMenu route={route} key={route.name} />;
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
