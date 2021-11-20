import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

import { emailRegular } from "./constants";

import './registration.css'

const RegistrationContainer = () => {
    const [email, setEmail] = useState('')
    const [isValidateErrorEmail, setValidateErrorEmail] = useState(false)

    const onChangeEmail = (e) => {
        const { value } = e.target

        if (isValidateErrorEmail) {
            setValidateErrorEmail(false)
        }

        setEmail(value)
    }

    const onSignUp = () => {
        setValidateErrorEmail(!emailRegular.test(email.toLowerCase()))

        if (emailRegular.test(email.toLowerCase())) {
            console.log(email)
        }
    }

    return (
        <div className="registrationContainer">
            <h1>
                Registration
            </h1>
            <TextField
                className="profileText"
                type="text"
                label="email"
                placeholder="email"
                onChange={onChangeEmail}
                value={email}
                style={{
                    marginBottom: 20
                }}
                error={isValidateErrorEmail}
                helperText={isValidateErrorEmail ? "Введите корректный email" :""}
            />

            <Button
                variant="contained"
                onClick={onSignUp}
                disabled={email.length > 5 && isValidateErrorEmail}
            >
                Sign up
            </Button>

        </div>
    )
}

export default RegistrationContainer
