import React, { useState } from 'react'
import { TextField, Button, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router'

import { axiosInstance } from "../../api/axiosInstance";

import { emailRegular, errorPasswordValidate } from "./constants";

import './registration.css'

const RegistrationContainer = () => {
    const history = useNavigate()
    const [dataUser, setDataUser] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    })

    const [isValidateErrorEmail, setValidateErrorEmail] = useState(false)
    const [validatePasswordError, setValidatePassword] = useState('')
    const [repeatPasswordError, setRepeatPasswordError] = useState('')
    const [userMessage, setUserMessage] = useState('')

    const [isLoadingSignUp, setIsLoadingSignUp] = useState(false)

    const onChangeUserField = (e) => {
        const { value, name } = e.target

        if (name === 'email') {
            if (isValidateErrorEmail) {
                setValidateErrorEmail(false)
            }
        }

        setDataUser((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const onValidatePassword = () => {
        if (dataUser.password.length < 6) {
            setValidatePassword(errorPasswordValidate.lengthError)
        } else {
            if (repeatPasswordError) setValidatePassword('')
        }
        onValidateRepeat()

    }

    const onValidateRepeat = () => {
        if (dataUser.repeatPassword !== dataUser.password) {
            setRepeatPasswordError(errorPasswordValidate.repeatError)
        } else {
            setRepeatPasswordError('')
        }
    }

    const onValidateEmail = () => {
        setValidateErrorEmail(!emailRegular.test(dataUser.email.toLowerCase()))
    }

    const onSignUp = () => {

        setIsLoadingSignUp(true)
        const data = JSON.stringify({
            email: dataUser.email,
            password: dataUser.password
        })

        setTimeout(() => {
            axiosInstance('/sign-up', {
                method: 'post',
                data: data
            })
                .then((res) => {
                    setUserMessage('Вы успешно зарегистрировались, ' +
                        'вы будете перенаправлены на логин')
                    setTimeout(() => {
                        history('/login')
                    }, 2000)
                })
                .catch((e) => {
                    setUserMessage(e?.response?.data?.message)
                })
                .finally(() => {
                    setIsLoadingSignUp(false)
                })
        }, 1000)
    }

    const isDisabledSignUp =
        dataUser.email.length < 6
        || isValidateErrorEmail
        || validatePasswordError
        || repeatPasswordError
        || dataUser.password.length < 6
        || dataUser.repeatPassword.length < 6
        || isLoadingSignUp

    return (
        <div className="registrationContainer">
            <h1>
                Registration
            </h1>
            <TextField
                className="profileText"
                type="text"
                label="email"
                name="email"
                placeholder="email"
                onChange={onChangeUserField}
                onBlur={onValidateEmail}
                value={dataUser.email}
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
                name="password"
                onChange={onChangeUserField}
                onBlur={onValidatePassword}
                value={dataUser.password}
                style={{
                    marginBottom: 20
                }}
                error={!!validatePasswordError}
                helperText={validatePasswordError || ""}
            />
            <TextField
                className="profileText"
                type="password"
                label="repeat password"
                placeholder="repeat password"
                name="repeatPassword"
                onChange={onChangeUserField}
                onBlur={onValidateRepeat}
                value={dataUser.repeatPassword}
                style={{
                    marginBottom: 20
                }}
                error={!!repeatPasswordError}
                helperText={repeatPasswordError || ""}
            />
            <Button
                variant="contained"
                onClick={onSignUp}
                disabled={!!isDisabledSignUp}
            >
                Sign up
            </Button>
            <div style={{
                height: 40,
                padding: '2%'
            }}>
                {isLoadingSignUp && <CircularProgress />}
            </div>


            <h2 style={{ color: 'red'}}>
                {userMessage}
            </h2>
        </div>
    )
}

export default RegistrationContainer
