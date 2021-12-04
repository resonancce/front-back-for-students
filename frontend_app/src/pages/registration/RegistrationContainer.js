import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

import {emailRegular, errorPasswordValidate} from "./constants";

import './registration.css'

const RegistrationContainer = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [isValidateErrorEmail, setValidateErrorEmail] = useState(false)
    const [validatePasswordError, setValidatePassword] = useState('')
    const [repeatPasswordError, setRepeatPasswordError] = useState('')

    const onChangeEmail = (e) => {
        const { value } = e.target

        if (isValidateErrorEmail) {
            setValidateErrorEmail(false)
        }

        setEmail(value)
    }

    const onChangePassword = (e) => {
        const { value } = e.target
        setPassword(value)
    }

    const onChangeRepeat = (e) => {
        const { value } = e.target
        setRepeatPassword(value)
    }

    const onValidatePassword = () => {
        if (password.length < 6) {
            setValidatePassword(errorPasswordValidate.lengthError)
        } else {
            if (repeatPasswordError) setValidatePassword('')
        }
        onValidateRepeat()

    }

    const onValidateRepeat = () => {
        if (repeatPassword !== password) {
            setRepeatPasswordError(errorPasswordValidate.repeatError)
        } else {
            setRepeatPasswordError('')
        }
    }

    const onValidateEmail = () => {
        setValidateErrorEmail(!emailRegular.test(email.toLowerCase()))

    }
    const onSignUp = () => {

        const dataUser = JSON.stringify({
            email,
            password
        })

        fetch('http://localhost:5001/sign-up', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: dataUser
        })
            .then((res) => console.log(res))
            .catch((e) => console.info(e))
    }

    const isDisabledSignUp =
        email.length < 6
        || isValidateErrorEmail
        || validatePasswordError
        || repeatPasswordError
        || password.length < 6
        || repeatPassword.length < 6

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
                onBlur={onValidateEmail}
                value={email}
                style={{
                    marginBottom: 20
                }}
                error={isValidateErrorEmail}
                helperText={isValidateErrorEmail ? "Введите корректный email" :""}
            />

            <TextField
                className="profileText"
                type="password"
                label="password"
                placeholder="password"
                onChange={onChangePassword}
                onBlur={onValidatePassword}
                value={password}
                style={{
                    marginBottom: 20
                }}
                error={validatePasswordError}
                helperText={validatePasswordError || ""}
            />
            <TextField
                className="profileText"
                type="password"
                label="repeat password"
                placeholder="repeat password"
                onChange={onChangeRepeat}
                onBlur={onValidateRepeat}
                value={repeatPassword}
                style={{
                    marginBottom: 20
                }}
                error={repeatPasswordError}
                helperText={repeatPasswordError || ""}
            />
            <Button
                variant="contained"
                onClick={onSignUp}
                disabled={isDisabledSignUp}
            >
                Sign up
            </Button>

        </div>
    )
}

export default RegistrationContainer
