import React from "react";
import '../profile.css'

const ProfileInfo = ({ user }) => {
    const {
        userName,
        email,
        number,
      role,
        skills = []
    } = user

    return (
        <div className="profileInfoContainer">
            <h1>
                role - {role}
            </h1>
            <p>
                email - {email}
            </p>
        </div>
    )
}

export default ProfileInfo
