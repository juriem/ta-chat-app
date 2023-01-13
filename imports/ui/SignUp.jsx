import React, {useState} from "react";
import {ErrorAlert} from "./components/Alert";

export const SignUp = ({onChangeState}) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("")
        Meteor.call('user.register', {username, email, password}, (error) => {
            if (!error) {
                Meteor.loginWithPassword(username, password)
            } else {
                setError(error.reason)
            }
        })
    }

    return (
        <div className="container w-75 text-center">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                    {error && <ErrorAlert message={error}/>}
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Your username"/>
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="form-floating">
                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"/>
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    <p className="mt-5 mb-3 text-muted">or <a href="#" onClick={onChangeState}>login</a></p>
                </form>
            </main>
        </div>
    )
}