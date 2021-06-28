import React, { useState, createContext } from 'react'

export const SignUpContext = createContext()

export function SignUpProvider(props) {
    const [step, setStep] = useState(1)
    const [family, setFamily] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (key, value) => {
        switch (key) {
            case 'next':
                setStep(step + 1)
                break;
            case 'back':
                setStep(step - 1)
                break;
            case 'family':
                setFamily(value)
                break;
            case 'mobile':
                setMobile(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            case 'reset':
                setStep(1)
                break;
            default:
                break;
        }
    }
    return (
        <SignUpContext.Provider value={{ step, family, mobile, email, password, handleChange }}>
            {props.children}
        </SignUpContext.Provider>
    )
}