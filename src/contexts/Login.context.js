import React, { createContext, useState } from 'react'

export const LoginContext = createContext();

export function LoginProvider(props) {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [name, setName] = useState('')

    const changeState = (key, value) => {
        switch (key) {
            case 'logged':
                setIsUserLoggedIn(true)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            case 'rememberMe':
                setRememberMe(!rememberMe)
                break;
            case 'name':
                setName(value)
                break;
            case 'spinner':
                setSpinner(!spinner)
                break;
            default:
                break;
        }
    }

    return (
        <LoginContext.Provider value={{ name, spinner, isUserLoggedIn, email, password, rememberMe, changeState }}>
            {props.children}
        </LoginContext.Provider>
    )
}