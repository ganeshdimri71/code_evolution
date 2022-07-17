import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import "../Navbar.css";
import { useState } from "react";
import Drawer from "./Drawer";
import { routes } from "../constant/constant";
import { iconsRoutes } from "../constant/constant";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Navbar routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;
