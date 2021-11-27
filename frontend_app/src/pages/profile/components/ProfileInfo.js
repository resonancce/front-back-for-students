import React from "react";
import '../profile.css'

const ProfileInfo = ({ user }) => {
    const {
        userName,
        email,
        number,
        skills = []
    } = user

    return (
        <div className="profileInfoContainer">
            <h1>
                {userName}
            </h1>
            <p>
                {email}
            </p>
            <p>
                {number}
            </p>
            <div>
                <p>Ваши скилы</p>
                {skills?.length !== 0 ? skills.map((skill) => (
                    <ul key={skill}>
                        <li>{skill}</li>
                    </ul>
                )) : (<span>у вас пока нет скилов</span>)}
            </div>
        </div>
    )
}

export default ProfileInfo
