import React, { useState } from 'react'
import { Button, TextField } from "@mui/material";
import { axiosInstance } from "../../api/axiosInstance";

import './login.css'

const LoginContainer = () => {
    const [dataUser, setDataUser] = useState({
        email: '',
        password: ''
    })
    const onChangeUserField = (e) => {
        const { value, name } = e.target


        setDataUser((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const onSignIn = () => {

        axiosInstance('/login', {
            data: JSON.stringify(dataUser)
        })
    }

    return (
        <div className="loginContainer">
            <h1>
                Login
            </h1>
            <TextField
                className="profileText"
                type="text"
                label="email"
                name="email"
                placeholder="email"
                onChange={onChangeUserField}
                value={dataUser.email}
                style={{
                    marginBottom: 20
                }}
                // error={isValidateErrorEmail}
                // helperText={isValidateErrorEmail ? "Введите корректный email" :""}
            />

            <TextField
                className="profileText"
                type="password"
                label="password"
                placeholder="password"
                name="password"
                onChange={onChangeUserField}
                value={dataUser.password}
                style={{
                    marginBottom: 20
                }}
                // error={validatePasswordError}
                // helperText={validatePasswordError || ""}
            />
            <Button
                variant="contained"
                onClick={onSignIn}
            >
                Login
            </Button>
        </div>
    )
}

export default LoginContainer