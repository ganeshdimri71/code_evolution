import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedSelected } from "../redux/features/employeeFeatures";

const EmployeesRedux = () => {
    let employeeState = useSelector((state) => state.employees.employees);
    console.log("employeeState", employeeState);
    let dispatch = useDispatch();

    const updatedSelectedEmployee = (empId) => {
        dispatch(updatedSelected({ id: empId }));
    };

    // let { employees } = state
    // console.log('state', state)
    return (
        <React.Fragment>
            <pre> {JSON.stringify(employeeState)} </pre>{" "}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.Exercitationem, nam.{" "}
                        </p>{" "}
                    </div>{" "}
                </div>{" "}
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {" "}
                            {employeeState.length > 0 &&
                                employeeState.map((employee) => {
                                    return (
                                        <li key={employee.id} className="list-group-item">
                                            <input
                                                type='checkbox'
                                                checked={employee.isSelected}
                                                className="form-check-input me-2"
                                                onChange={() => updatedSelectedEmployee(employee.id)}
                                            />{" "}
                                            {employee.name}{" "}
                                        </li>
                                    );
                                })}{" "}
                        </ul>{" "}
                    </div>{" "}
                    <div className="col-md-6">
                        {" "}
                        {employeeState.length > 0 &&
                            employeeState.map((employee) => {
                                return (
                                    <div key={employee.id}>
                                        {" "}
                                        {employee.isSelected && (
                                            <div className="card my-2">
                                                <div className="card-body">
                                                    <ul className="list-group">
                                                        <li className="list-group-item">
                                                            Name:{" "}
                                                            <span className="fw-bold"> {employee.name} </span>{" "}
                                                        </li>{" "}
                                                        <li className="list-group-item">
                                                            Name:{" "}
                                                            <span className="fw-bold"> {employee.name} </span>{" "}
                                                        </li>{" "}
                                                    </ul>{" "}
                                                </div>{" "}
                                            </div>
                                        )}{" "}
                                    </div>
                                );
                            })}{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </React.Fragment>
    );
};

export default EmployeesRedux;
