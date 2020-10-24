import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function loginHandler(e){
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }
        axios.post("http://171.22.25.125/api/login", data)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })
    }

    return <>
        {
            localStorage.getItem('token') != null ? window.location.href = '/user/panel' : ''
        }
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <form className="form-horizontal" method="post">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="Enter Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Enyet Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <Link className="nav-link" to="/auth/reset/password">Reset Password</Link>
                        <div className="form-group">
                            <button 
                                className="btn btn-primary"
                                onClick={loginHandler}
                            >Login</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    </>
}

export default Login