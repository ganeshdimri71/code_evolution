import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './componentsTwelve/components/Home'
import Employees from './componentsTwelve/components/Employees'
import Counter from './componentsTwelve/components/Counter.jsx'
import UserList from './componentsTwelve/components/UserList'
import Navbar from './componentsTwelve/components/Navbar'

const App9 = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/employees'} element={<Employees />} />
                <Route path={'/counter'} element={<Counter />} />
                <Route path={'/users'} element={<UserList />} />
            </Routes>
        </React.Fragment>
    )
}

export default App9