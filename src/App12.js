import React from "react";
import "./App12.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentThirteen/components/Navbar";
import Home from "./componentThirteen/pages/Home";
import Consulting from "./componentThirteen/pages/Consulting";
import Contactus from "./componentThirteen/pages/Contactus";
import Design from "./componentThirteen/pages/Design";
import Development from "./componentThirteen/pages/Development";
import Marketing from "./componentThirteen/pages/Marketing";
import Products from "./componentThirteen/pages/Products";
import Services from "./componentThirteen/pages/Services";
import Signup from "./componentThirteen/pages/Signup";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/contactus" component={Contactus}></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/services" component={Services}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/marketing" component={Marketing}></Route>
                    <Route path="/development" component={Development}></Route>
                    <Route path="/design" component={Design}></Route>
                    <Route path="/consulting" component={Consulting}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
