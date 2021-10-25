import React, { useState } from 'react';
import './content.css'

const user = {
    name: 'user1',
    password: '1234'
}

const Content = () => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmailText(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onSignIn = () => {
        if (emailText === user.name && user.password === passwordText) {
            console.log('login');
        }
    };

    return (
        <div className="content">
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
        </div>
    )
}

export default Content
