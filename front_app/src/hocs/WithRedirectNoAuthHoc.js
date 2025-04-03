import React, {memo, useEffect} from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


const WithRedirectNoAuthHoc = ({ children }) => {
    const navigate = useNavigate()
    const token = useSelector((state) => state.user.token)

    useEffect(() => {
        if (token) {
            navigate(-1)
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