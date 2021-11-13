import React, {useState} from 'react'
import { TextField } from '@mui/material';

import logo from "../../logo.svg";

import ProfileEditForm from "./components/ProfileEditForm";
import ProfileInfo from "./components/ProfileInfo";

import './profile.css'

const profileMode = {
    profileInfo: 0,
    edit: 1
}

const ProfileContainer = () => {
    const [modeView, setViewMode] = useState(profileMode.profileInfo)

    return (
        <div className="profileContainer">
            <div>
                <img
                    src={logo}
                    alt="аватар"
                    className="profileAvatar"
                />
            </div>
            {modeView === profileMode.profileInfo && (
                <ProfileInfo />
            )}
            {modeView === profileMode.edit && (
                <ProfileEditForm />
            )}
        </div>
    )
}

export default ProfileContainer
