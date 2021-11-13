import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import Loader from '../Loader/Loader'

import './content.css'

import {
    DEFAULT_ERROR,
    image_demo_url,
    keyUserData,
    news_url
} from '../../utils/constant'

const user = {
    name: 'user1',
    password: '1234'
}

const Content = () => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPassword] = useState('');
    const [errorLoadingNews, setErrorLoadingNews] = useState('');
    const [isAuth, setIsAuth] = useState(false);
    const [isLoadingNews, setLoadingNews] = useState(false);
    const [news, setNews] = useState([]);

    const handleChangeEmail = (e) => {
        setEmailText(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onSignIn = () => {
        if (emailText === user.name && user.password === passwordText) {
            setIsAuth(true)

            try {
                localStorage.setItem(keyUserData, JSON.stringify(user))
            } catch (e) {
                console.info('ошибка при установке keyUserData')
            }
        }
    };

    const onLogout = () => {
        setIsAuth(false)
        try {
            localStorage.setItem(keyUserData, '')
        } catch (e) {
            console.info('ошибка при установке keyUserData')
        }

    }

    useEffect(() => {
         console.log('длина новостей', news.length)
    }, [news.length])

    useEffect(() => {
        if (isAuth) {
            setLoadingNews(true)
            setTimeout(() => {
                fetch(news_url)
                    .then((res) => res.json())
                    .then((res) => {
                        setNews(res.arrayNews)
                        if (errorLoadingNews) {
                            setErrorLoadingNews('')
                        }
                    })
                    .catch(() => {
                        setErrorLoadingNews(DEFAULT_ERROR)
                    })
                    .finally(() => {
                        setLoadingNews(false)
                    })
            }, 1000)
        }
    }, [isAuth])

    useEffect(() => {
        const user = localStorage.getItem(keyUserData)

        if (user) {
            setIsAuth(true)
        }
    }, [])

    return (
        <div className="content">
            {!isAuth && (
                <div className="emailForm">
                    <input
                        className="emailField"
                        type="text"
                        value={emailText}
                        placeholder="Введите логин"
                        onChange={handleChangeEmail}
                    />
                    <input
                        className="emailField"
                        type="password"
                        onChange={handleChangePassword}
                        value={passwordText}
                        placeholder="Введитите пароль"
                    />
                    <div>
                        <button className="signInButton" onClick={onSignIn}>
                            sign in
                        </button>
                    </div>
                </div>
            )}
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            {isAuth && (
                <div className="authContainer">
                    {isLoadingNews && <Loader />}

                    {!isLoadingNews && Boolean(news.length) && news.map((item) => (
                        <div key={item.id} className="newsContainer">
                            <div className="news">
                                <div className="newsTitleContainer">
                                    <img
                                        src={image_demo_url}
                                        className="newsImage"
                                        alt="картинка поста"
                                    />
                                    <p className="newsTitle">
                                        {item.articleName}
                                    </p>
                                </div>
                                <div className="newsContent">
                                    <p className="newsText">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {errorLoadingNews && <p className="newsError">{errorLoadingNews}</p>}
                    <button className="logoutButton" onClick={onLogout}>
                        Выйти
                    </button>
                </div>
            )}
        </div>
    )
}

export default Content
