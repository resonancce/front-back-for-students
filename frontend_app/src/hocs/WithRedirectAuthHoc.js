import React, { memo } from 'react'
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";


const WithRedirectAuthHoc = ({ children }) => {
    const token = useSelector((state) => state.user.token)

    if (!token) {
        return (<Redirect to="/" />)
    }

    return (
        <>
            {children}
        </>
    )
}

export default memo(WithRedirectAuthHoc)