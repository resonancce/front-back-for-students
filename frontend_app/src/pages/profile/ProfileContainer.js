import React, { useState } from 'react'
import { Button } from '@mui/material';

import logo from "../../logo.svg";

import { profileMode } from "./constants";
import ProfileEditForm from "./components/ProfileEditForm";
import ProfileInfo from "./components/ProfileInfo";

import './profile.css'

const ProfileContainer = () => {
    const [modeView, setViewMode] = useState(profileMode.profileInfo)

    const onEditSwitch = (mode) => {
        setViewMode(mode)
    }

    return (
        <div className="profileContainer">
            <div>
                <img
                    src={logo}
                    alt="аватар"
                    className="profileAvatar"
                />
                {modeView === profileMode.profileInfo && (
                    <Button
                        style={{
                            width: 150
                        }}
                        variant="contained"
                        onClick={() => onEditSwitch(profileMode.edit)}
                    >
                        Edit profile
                    </Button>
                )}
            </div>
            {modeView === profileMode.profileInfo && (
                <ProfileInfo />
            )}
            {modeView === profileMode.edit && (
                <ProfileEditForm
                    onEditSwitch={onEditSwitch}
                />
            )}
        </div>
    )
}

export default ProfileContainer
