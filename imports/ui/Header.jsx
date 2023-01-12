import React from "react";

export const Header = ({onLogin, onSignUp, onLogout}) => {

    const renderButtons = () => {
        if (!Meteor.userId()) {
            return (
                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2" onClick={onLogin}>Login</button>
                    <button type="button" className="btn btn-primary" onClick={onSignUp}>Sign-up</button>
                </div>
            )
        }

        return (
            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2" onClick={onLogout}>Log Out</button>
            </div>
        )
    }

    return (
        <header
            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                    {/*<use xlink:href="#bootstrap"></use>*/}
                </svg>
            </a>

            {renderButtons()}
        </header>
    )
}