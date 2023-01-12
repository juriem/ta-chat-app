import React, {useState} from 'react';
import {Login} from "./Login";
import {useTracker} from 'meteor/react-meteor-data';
import {SignUp} from "./SignUp";
import {Chat} from "./Chat";

export const App = () => {

    const [mode, setMode] = useState("login")


    const loggedIn = useTracker(() => Meteor.userId())

    const onLogin = (e) => {
        e.preventDefault();
        setMode("login")
    }

    const onSignup = (e) => {
        e.preventDefault();
        setMode("signup")
    }

    const onLogout = (e) => {
        e.preventDefault();
        console.log('ok')
        Meteor.logout();
    }

    const renderContent = () => {
        if (!Meteor.userId()) {
            if (mode === 'login') {
                return <Login />
            }
            return <SignUp />
        }

        return <Chat />
    }

    return (
            <Chat />
    )
}
