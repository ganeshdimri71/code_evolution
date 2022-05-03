import React, { useState } from 'react'
import { EmployeeService } from '../services/sercices'

const Employees = () => {
  const [state, setState] = useState(EmployeeService.getAllEmployee())

  let updateSelected = (empId) => {
    let selectedEmployees = state.map(employee => {
      if (employee.id === empId) {
        return {
          ...employee,
          isSelected: !employee.isSelected
        }
      } else {
        return {
          ...employee,
          isSelected: employee.isSelected
        }
      }
    })
    console.log('selectedEmployees', selectedEmployees);
    setState(selectedEmployees)
  }

  // let { employees } = state
  // console.log('state', state)
  return (
    <React.Fragment>
      <pre>{JSON.stringify(state)}</pre>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nam.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">

              {
                state.length > 0 &&
                state.map(employee => {
                  return (
                    <li key={employee.id} className='list-group-item'>
                      <input type="checkbox" className='form-check-input me-2'
                        onChange={() => updateSelected(employee.id)}
                      />
                      {employee.name}</li>
                  )
                })
              }
            </ul>

          </div>
          <div className="col-md-6">
            {
              state.length > 0 &&
              state.map(employee => {
                return (
                  <div key={employee.id}>{
                    employee.isSelected && (
                      <div className="card my-2">
                        <div className="card-body">
                          <ul className="list-group">
                            <li className="list-group-item">
                              Name : <span className="fw-bold">{employee.name}</span>
                            </li>
                            <li className="list-group-item">
                              Name : <span className="fw-bold">{employee.name}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )
                  }


                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Employees