
import { useState, useRef, useEffect } from "react";
// import Cards from "react-credit-cards";
import Cards from 'react-credit-cards/es/index'
import "react-credit-cards/es/styles-compiled.css";

export default function App24() {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");

    useEffect(() => {
        ref.current.focus();
    }, []);

    const ref = useRef(null);
    return (
        <div className="App">
            <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            />
            <form>
                <input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    ref={ref}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                    type="text"
                    name="expiry"
                    placeholder="expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />
            </form>
        </div>
    );
}
