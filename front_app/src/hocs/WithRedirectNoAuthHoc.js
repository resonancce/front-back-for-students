import React, {memo, useEffect} from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


const WithRedirectNoAuthHoc = ({ children }) => {
    const history = useNavigate()
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