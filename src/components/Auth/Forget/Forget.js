import React from 'react'

const Forget = (props) => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Send Reset Password Email</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default Forget