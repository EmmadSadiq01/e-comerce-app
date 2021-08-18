import React from 'react'
import { useState } from 'react'

const LoginScreen = () => {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const loginProccess = (e) => {
        e.preventDefault()
        console.log("submission...")
    }
    return (
        <div className="container ">
            <h1>Welcome to E-mart</h1>
            <form >
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" value={UserName} onChange={e => setUserName(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">

                    <label htmlFor="">Password</label>
                    <input type="Password" onChange={e => setPassword(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={loginProccess}>Login</button>
                </div>

            </form>



        </div>
    )
}

export default LoginScreen
