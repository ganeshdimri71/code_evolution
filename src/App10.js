import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './componentsTwelve/components/Home'
import EmployeesRedux from './componentsTwelve/components/EmployeesRedux'
import CounterRedux from './componentsTwelve/components/CounterRedux.jsx';
import UserListRedux from './componentsTwelve/components/UserListRedux'
import Navbar from './componentsTwelve/components/Navbar'

const App9 = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/employees'} element={<EmployeesRedux />} />
                <Route path={'/counter'} element={<CounterRedux />} />
                <Route path={'/users'} element={<UserListRedux />} />
            </Routes>
        </React.Fragment>
    )
}

export default App9