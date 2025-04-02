import React, {useEffect, useState} from "react";

import './notFoundPage.css'
import { useNavigate } from "react-router";

const NotFoundPageContainer = () => {
    const [countRedirect, setCountRedirect] = useState(3)
    const history = useNavigate()

    useEffect(() => {
        const idInterval = setInterval(() => {
            setCountRedirect((prevState => prevState - 1))
        }, 1000)

        return () => {
            clearInterval(idInterval)
        }
    },[])


    useEffect(() => {
        if (countRedirect === 0) {
            history.push('/')
        }
    },[countRedirect])

    return (
        <div className="notFoundContainer">
            <h1>404 - Страница не найдена</h1>
            <h1>Вы будете перенаправлены на главную через {countRedirect}</h1>
        </div>
    )
}

export default NotFoundPageContainer