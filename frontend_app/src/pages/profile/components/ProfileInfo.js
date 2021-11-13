import React from "react";

import '../profile.css'

const demoUser = {
    login: "Test",
    mail: "test@mail.ru",
    number: "+7 999 99 99 99",
    info: "test info",
    skills: ['css', 'html', 'git']
}

const ProfileInfo = () => {


    return (
        <div className="profileInfoContainer">
            <h1>
                {demoUser.login}
            </h1>
            <p>
                {demoUser.mail}
            </p>
            <p>
                {demoUser.number}
            </p>
            <p>
                {demoUser.info}
            </p>
        </div>
    )
}

export default ProfileInfo
