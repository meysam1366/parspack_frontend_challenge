import React,{useState} from 'react'
import axios from 'axios'

const Register = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    function registerHandler(e) {
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirm
        }
        axios.post("http://171.22.25.125/api/signup", data)
            .then(response => {
                if(response.statusText === 201) {
                    window.location.href = '/auth/login'
                }
                console.log(response)
            })
            .catch(err => {
                console.log(password,passwordConfirm)
                console.log(err.status)
            })
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <form className="form-horizontal" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="name" 
                                className="form-control" 
                                id="name" 
                                placeholder="Enter Name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
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
                                placeholder="Enter Password" 
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password_confirm">Password Confirm</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password_confirm" 
                                placeholder="Enter Password Confirm" 
                                value={passwordConfirm}
                                onChange={(event) => setPasswordConfirm(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button 
                                className="btn btn-primary"
                                onClick={registerHandler}
                            >Register</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default Register