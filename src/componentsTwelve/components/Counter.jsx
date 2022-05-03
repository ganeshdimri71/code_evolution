import React, { useState } from "react";


const Counter = () => {
  const [state, setState] = useState(0);
  let clickIncr = () => {
    setState((prevState) => prevState + 1);
  };
  let clickDecr = () => {
    setState((prevState) => prevState - 1);
  };
  let clickIncrBy = () => {
    setState((prevState) => prevState + 5);
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <p className="h3">{state}</p>

                <button className="btn btn-success m-1" onClick={clickIncr}>
                  Increment
                </button>
                <button className="btn btn-warning m-1" onClick={clickDecr}>
                  Decrement
                </button>
                <button className="btn btn-danger m-1" onClick={clickIncrBy}>
                  Increment By 5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
