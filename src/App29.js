import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import About from './ReactRouterDom/components/About'

import FeaturedProducts from './ReactRouterDom/components/FeaturedProducts'
import Home from './ReactRouterDom/components/Home'
import Navbar from './ReactRouterDom/components/Navbar'
import NewProducts from './ReactRouterDom/components/NewProducts'
import NotMatch from './ReactRouterDom/components/NotMatch'
import OrderSummary from './ReactRouterDom/components/OrderSummary'
import Products from './ReactRouterDom/components/Products'
import Users from './ReactRouterDom/components/Users'
import UserDetail from './ReactRouterDom/components/UserDetail'
import Admin from './ReactRouterDom/components/Admin'

import Profile from './ReactRouterDom/components/Profile'
import { AuthProvider } from './ReactRouterDom/components/auth'
import Login from './ReactRouterDom/components/Login'
const LazyAbout = React.lazy(() => import('./ReactRouterDom/components/About'))
import RequireAuth from './ReactRouterDom/components/RequireAuth'

const App29 = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='about' element={<About />} /> */}
                <Route path='about' element={
                    <React.Suspense fallback='Loading...'>
                        <LazyAbout />
                    </React.Suspense>} />
                <Route path='order-summary' element={<OrderSummary />} />
                <Route path='products' element={<Products />} >
                    <Route index element={<FeaturedProducts />} />
                    <Route path='featured' element={<FeaturedProducts />} />
                    <Route path='new' element={<NewProducts />} />
                </Route>
                {/* <Route path='users' element={<Users />} />
                <Route path='users/:userId' element={<UserDetail />} />
                <Route path='users/admin' element={<Admin />} /> */}
                <Route path='users' element={<Users />} >
                    <Route path=':userId' element={<UserDetail />} />
                    <Route path='admin' element={<Admin />} />
                </Route>
                <Route path='profile' element={<RequireAuth>
                    <Profile />
                </RequireAuth>} />
                <Route path='login' element={<Login />} />
                <Route path='*' element={<NotMatch />} />
            </Routes>
        </AuthProvider>

    )
}

export default App29