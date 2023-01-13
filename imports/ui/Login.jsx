import React, {useState} from 'react';
import {ErrorAlert} from "./components/Alert";

export const Login = ({onChangeState}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        setError("")
        Meteor.loginWithPassword(username, password, (result) => {
            if (result) {
                setError(result.reason)
            }
        })
    }

    return (
        <div className="container w-75 text-center">

            <main className="form-signin w-100 m-auto">
                <form onSubmit={onSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    {error && <ErrorAlert message={error}/>}
                    <div className="form-floating">
                        <input
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                            type="text" className="form-control" id="floatingInput"
                            placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="password" className="form-control" id="floatingPassword"
                            placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">or <a href="#" onClick={onChangeState}>Register</a></p>
                </form>
            </main>
        </div>
    )
}