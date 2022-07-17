import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate, useLocation } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState('')
    const auth = useAuth()

    const redirectPath = location.state?.path || '/'
    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }
    return (
        <div>
            <label htmlFor="">
                Username:{''}
                <input type="text" name="" value={user} onChange={(e) => setUser(e.target.value)} id="" />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login