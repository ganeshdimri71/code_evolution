import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentFourteen/Home'
import About from './componentFourteen/About'
import Online from './componentFourteen/Online'
import Offline from './componentFourteen/Offline'
import Contact from './componentFourteen/Contact'
import Navbarmenu from './componentFourteen/menu/Navbarmenu'
const App14 = () => {
    return (
        <>
            <Router basename='/'>
                <Navbarmenu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Online' element={<Online />} />
                    <Route path='/Offline' element={<Offline />} />
                    <Route path='/Contact' element={<Contact />} />
                </Routes>
            </Router>
        </>
    )

}

export default App14
