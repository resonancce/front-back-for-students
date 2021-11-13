import React from 'react'
import { TextField } from '@mui/material';

import './profile.css'

const ProfileContainer = () => {


    return (
        <div className="profileContainer">
            <TextField
                label="Логин"
            />
            <TextField
                multiline
                rows={4}
                label="Информация профиля"
            />
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
            />
        </div>
    )
}

export default ProfileContainer
