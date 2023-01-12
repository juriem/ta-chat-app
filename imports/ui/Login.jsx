import React, {useState} from 'react';

export const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) => {
        e.preventDefault();
        console.log('Login');
        Meteor.loginWithPassword(username, password)
    }

    return (
        <main className="form-signin w-100 m-auto">
            <form>
                <img className="mb-4" src="/images/bootstrap-logo.svg" alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
            </form>
        </main>
    )
}