import React, { memo } from 'react'
import {useSelector} from "react-redux";
import {Navigate} from "react-router";


const WithRedirectAuthHoc = ({ children }) => {
    const token = useSelector((state) => state.user.token)

    if (!token) {
        return (<Navigate to="/" />)
    }

    return (
        <>
            {children}
        </>
    )
}

export default memo(WithRedirectAuthHoc)