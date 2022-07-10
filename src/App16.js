import React from "react";
import logo from "./logo.svg";
import "./App16.css";
import Testimonials from "./Testimonials.js";

function App() {
    return (
        <div className="App">
            <header>
                <h1>Hear What the world say about us...</h1>
                <Testimonials />
            </header>
        </div>
    );
}

export default App;