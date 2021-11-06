import React, { useEffect, useState} from 'react';
import './content.css'

const user = {
    name: 'user1',
    password: '1234'
}

const news_1 = {
    id: 1,
    articleName: "Новость 1",
    text: "Контент новости Контент новости2 ",
}

const news_2 = {
    id: 2,
    articleName: "Новость 2",
    text: "Контент новости 2 Контент новости 2 Контент новости 2",
}

const arrayNews = [news_1, news_2];
const news_url = 'http://localhost:5000/news'

const Content = () => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(false);
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
        }
    };

    const onLogout = () => {
        setIsAuth(false)
    }

    useEffect(() => {


        fetch(news_url)
            .then((res) => res.json())
            .then((res) => setNews(res.arrayNews))
    }, [])

    console.log('смотрим news массив', news)
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
            {isAuth && !!news.length && (
                <div className="authContainer">
                    {news.map((item) => (
                        <div key={item.id} className="newsContainer">
                            <div className="news">
                                <p className="news_title">
                                    {item.articleName}
                                </p>
                                <div className="news_content">
                                    {item.text}
                                </div>
                            </div>
                        </div>
                    ))}

                    <button className="logoutButton" onClick={onLogout}>
                        Выйти
                    </button>
                </div>
            )}
        </div>
    )
}

export default Content
