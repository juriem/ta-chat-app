import React, {useState} from 'react';
import {LoginOrSignUp} from "./LoginOrSignUp";
import {Chat} from "./Chat";
import {useTracker} from 'meteor/react-meteor-data';

export const App = () => {

    const loggedIn = useTracker(() => Meteor.userId())

    if (!loggedIn) {
        return <LoginOrSignUp />
    }

    Meteor.call('users.setOnline', {userId: Meteor.userId()})

    const handleLogout = (e) => {
        e.preventDefault();
        Meteor.call('users.setOffline', {userId: Meteor.userId()});
        Meteor.logout();
    }

    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-end h-25">
                <div className="col-12">
                    <a href="#" onClick={handleLogout}>Logout</a>
                </div>
            </div>
            <Chat />
        </div>
    )
}
