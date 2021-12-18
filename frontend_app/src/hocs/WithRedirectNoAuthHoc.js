import React, {memo, useEffect} from 'react'
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom'


const WithRedirectNoAuthHoc = ({ children }) => {
    const history = useHistory()
    const token = useSelector((state) => state.user.token)

    useEffect(() => {
        if (token) {
            history.goBack()
        }
    } , [token])

    if (token) {
        return null
    }
    return (
        <>
            {children}
        </>
    )
}

export default memo(WithRedirectNoAuthHoc)