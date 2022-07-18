import React from 'react'
import './App30.css'
import Home from './HamburgerMenu/pages/Home'
import About from './HamburgerMenu/pages/About'
import Contact from './HamburgerMenu/pages/Contact'
import Product from './HamburgerMenu/pages/Product'
import Services from './HamburgerMenu/pages/Services'
import { Routes, Route } from 'react-router-dom'
import Navigation from './HamburgerMenu/components/Navigation/Navigation'
const App30 = () => {
    return (
        <>
            <Navigation />
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product' element={<Product />} />
                <Route path='/service' element={<Services />} />
            </Routes>
        </>

    )
}

export default App30