import React from 'react'
import { Link, Route } from 'react-router-dom'
import './Navigation.css'
import Login from '../../Auth/Login/Login'
import Register from '../../Auth/Register/Register'
import Forget from '../../Auth/Forget/Forget'
import Panel from '../../User/Panel/Panel'

const Navigation = (props) => {

    function logoutHandler(e){
        e.preventDefault()
        localStorage.removeItem('token')
        window.location.href = '/'
    }

    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                {
                    !localStorage.getItem('token') ? 
                    <>
                        <Link className="nav-link" to="/auth/login">Login</Link>
                        <Link className="nav-link" to="/auth/register">Register</Link>
                    </>
                    : 
                    <>
                        <Link className="nav-link" to="/user/panel">Panel</Link>
                        <Link className="nav-link" to="" onClick={logoutHandler}>Logout</Link>
                    </>
                }
            </nav>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={Register} />
            <Route exact path="/auth/reset/password" component={Forget} />
            <Route exact path="/user/panel" component={Panel} />
        </div>
    )
}

export default Navigation;