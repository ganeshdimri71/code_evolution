import { createSlice } from "@reduxjs/toolkit";
import { EmployeeService } from "../../services/sercices";

const initialState = {
    employees: EmployeeService.getAllEmployee()
}


const employeeSlice = createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {
        updatedSelected: (state, action) => {
            console.log('action.payload.id', action.payload.id)
            state.employees = state.employees.map(employee => {
                if (employee.id === action.payload.id) {
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
        }
    }
})

export const { updatedSelected } = employeeSlice.actions
export default employeeSlice.reducer