import counterReducer from './features/counterFeature'
import employeeReducer from './features/employeeFeatures'
import userListReducer from './features/userFeatures'
const rootReducer = {
    counter: counterReducer,
    employees: employeeReducer,
    users: userListReducer
}

export default rootReducer