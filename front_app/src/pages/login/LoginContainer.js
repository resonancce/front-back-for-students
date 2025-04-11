import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {Button, CircularProgress, TextField} from "@mui/material";
import { axiosInstance } from "../../api/axiosInstance";

import './login.css'
import {setUserToken} from "../../utils/userToken";
import {editUserFiled} from "../../store/actions/userActions";

const LoginContainer = () => {
    const dispatch = useDispatch()

    const [isLoadingAuth, setIsLoadingAuth] = useState(false)

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
        setIsLoadingAuth(true)
        axiosInstance('/auth', {
            method: 'post',
            data: JSON.stringify(dataUser)
        }).then((res) => {
          console.info('@@---->res', res)
            setUserToken(res?.data.token)
            dispatch(editUserFiled(res?.data))
        })
          .catch((e) => console.info(e.response))
          .finally(() => setIsLoadingAuth(false))
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
            {isLoadingAuth && <CircularProgress className="profileLoader"/> }
        </div>
    )
}

export default LoginContainer