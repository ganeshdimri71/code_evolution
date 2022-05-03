import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByFive,
} from "../redux/features/counterFeature";
const CounterRedux = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  console.log("count", count);
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h3">{count}</p>

                <button
                  className="btn btn-success m-1"
                  onClick={() => dispatch(increment())}
                >
                  Increment
                </button>
                <button
                  className="btn btn-warning m-1"
                  onClick={() => dispatch(decrement())}
                >
                  Decrement
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => dispatch(incrementByFive(5))}
                >
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

export default CounterRedux;
