import React, {useState} from "react";

export const SignUp = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const register = (e) => {
        e.preventDefault();
        Meteor.call('user.register', {username, email, password})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="container">
            <div className="row">
                <div className="col">
                    <label className="form-label">Username:</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md">
                    <label className="form-label">Email:</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control"/>
                </div>
            </div>

            <div className="row btn-group">
                <div className="col-md">
                    <button type="submit" className="btn btn-primary">Signup</button>
                </div>
            </div>
        </form>
    )
}