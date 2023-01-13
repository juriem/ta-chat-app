import React, {useState} from 'react';
import {Login} from "./Login";
import {SignUp} from "./SignUp";

export const LoginOrSignUp = () => {

    const [state, setState] = useState('login')

    const onChangeState = (newState) => {
        return (e) => {
            e.preventDefault();
            setState(newState);
        }
    }

    if (state === 'login') {
        return <Login onChangeState={onChangeState('register')}/>
    }

    return <SignUp onChangeState={onChangeState('login')} />
}