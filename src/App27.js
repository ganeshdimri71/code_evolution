import React from "react";
import Card from "react-credit-cards";

import SupportedCards from "./SupportedCards";
import './App26.css'

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const App27 = () => {
    const [creditCardInfo, setCreditCardInfo] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: "",
        formData: null
    })


    const handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            setCreditCardInfo({ issuer });
        }
    };

    const handleInputFocus = ({ target }) => {
        setCreditCardInfo({
            focused: target.name
        });
    };

    const handleInputChange = ({ target }) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        setCreditCardInfo({ [target.name]: target.value });
    };

    const handleSubmit = e => {
        // console.log()
        const form = e.target
        e.preventDefault();
        const { issuer } = creditCardInfo;
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        setCreditCardInfo({ formData });
        form.reset();
    };

    useEffect(() => {
        ref.current.focus();
    }, []);
    const ref = useRef(null)

   

    const { name, number, expiry, cvc, focused, issuer, formData } = creditCardInfo;

    return (
        <div key="Payment">
            <div className="App-payment">
                <h1>React Credit Cards</h1>
                <h4>Beautiful credit cards for your payment forms</h4>
                <Card
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focused}
                    callback={handleCallback}
                />
                <form

                    onSubmit={handleSubmit}
                    // ref={c => (form = c)}
                    ref={c=>(ref.current=c)}
                    ref={ref}
                >
                    <div className="form-group">
                        <input
                            type="tel"
                            name="number"
                            className="form-control"
                            placeholder="Card Number"
                            pattern="[\d| ]{16,22}"
                            required
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <small>E.g.: 49..., 51..., 36..., 37...</small>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            required
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input
                                type="tel"
                                name="expiry"
                                className="form-control"
                                placeholder="Valid Thru"
                                pattern="\d\d/\d\d"
                                required
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="tel"
                                name="cvc"
                                className="form-control"
                                placeholder="CVC"
                                pattern="\d{3,4}"
                                required
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                        </div>
                    </div>
                    <input type="hidden" name="issuer" value={issuer} />
                    <div className="form-actions">
                        <button className="btn btn-primary btn-block">PAY</button>
                    </div>
                </form>
                {formData && (
                    <div className="App-highlight">
                        {formatFormData(formData).map((d, i) => (
                            <div key={i}>{d}</div>
                        ))}
                    </div>
                )}
                <hr style={{ margin: "60px 0 30px" }} />
                <div className="App-badges">
                    <a
                        href="https://github.com/amarofashion/react-credit-cards"
                        className="github__btn"
                    >
                        <img
                            alt="View on GitHub"
                            src="https://cdn.jsdelivr.net/gh/gilbarbara/logos@2017.12/logos/github-icon.svg"
                        />
                        <span>View on GitHub</span>
                    </a>

                    <a href="https://codesandbox.io/s/ovvwzkzry9">
                        <img
                            alt="Edit ovvwzkzry9"
                            src="https://codesandbox.io/static/img/play-codesandbox.svg"
                        />
                    </a>
                </div>
                <hr style={{ margin: "30px 0" }} />
                <SupportedCards />
            </div>
            <div className="App-credits">
                Made with ❤️ at <a href="https://amaro.com/">AMARO</a>.
            </div>
        </div>
    );
}


export default App27
